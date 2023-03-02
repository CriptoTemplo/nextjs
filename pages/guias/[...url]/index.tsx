import { GetServerSideProps } from 'next';
import { IMetaTags, getHead } from "@/utils/helmet";
import GuiaStore from "@/stores/GuiaStore";
import { ICategory, IGuia, IPost } from "@/definitions/definitions";
import Utils from "@/utils/utils";
import Post, { IPostProps } from "@/containers/post";
import GlobalCache from "@/definitions/cache";
import CryptoCard, { ICryptoCardProps } from "@/components/cryptoCard/cryptoCard";
import { useRouter } from "next/router";
import SectionWrapper, { ISectionWrapperProps } from "@/components/SectionWrapper";
import CategoryWrapper from "@/containers/category/CategoryWrapper";
import GuideWrapper from "@/containers/category/GuideWrapper";

type GuiaOrCategory = "guia" | "category" | "";

interface IGuiaProps {
	type: GuiaOrCategory;
	guia: IGuia;
	category: ICategory;
	relationedPosts: IPost[];
	lastGuias: IGuia[];
}

export default function Guia(props: IGuiaProps) {

	const router = useRouter()

	const getPostProps = (): IPostProps => {
		let post: IPost = props.guia.Post;
		post.content = GlobalCache.converter.makeHtml(post.content);
		post.published_at = props.guia.published_at;
		post.updatedAt = props.guia.updatedAt;
		return {
			post: post,
			relationedPosts: []
		}
	};

	const getCryptoCardProps = (): ICryptoCardProps => {
		return {
			crypto: props.guia.crypto
		}
	}

	const getSectionWrapperProps = (): ISectionWrapperProps => {
		return {
			title: "Últimas Publicaciones",
			guias: props.lastGuias
		}
	}

	const getMetaTags = (): IMetaTags => {
		const main: IGuia | ICategory = !Utils.isObjectEmpty(props.guia) ? props.guia : props.category;
		const metaTags: IMetaTags = !Utils.isObjectEmpty(props.guia) ? props.guia.MetaTags : props.category.MetaTags;
		return {
			title: metaTags.title,
			description: metaTags.description,
			canonical: router.asPath,
			published_time: main.published_at,
			modified_time: main.updatedAt
		}
	};

	switch (props.type) {
		case "guia":
			let header = <></>;
			if (props.guia.crypto) header = <CryptoCard {...getCryptoCardProps()} />
			return (
				<>
					{getHead(getMetaTags())}
					<div className="post">
						{header}
						<div className="mediaPostWrapper">
							<Post {...getPostProps()} />
						</div>
						<div className="sectionWrapper">
							<SectionWrapper {...getSectionWrapperProps()} />
						</div>
					</div>
				</>
			)
		// Aqui hay dos casos:
		// 1: La categoria es un wrapper de categorias
		// Hay que comprobar que los hijos tengan o no landing y si tienen al menos un articulo, sino no se muestra
		// 2: La categoria es un wrapper de guias. Aqui puede mostrar o no un articulo html
		case "category":
			return (
				<>
					{getHead(getMetaTags())}
					<div className="category">
						{props.category.categories.length ? <CategoryWrapper {...props.category} /> : <GuideWrapper {...props.category} />}
					</div>
				</>
			)
		default: //TODO este en teoria sobra
			return "";
	}
}

export const getServerSideProps: GetServerSideProps<IGuiaProps> = async (context) => {
	try {
		const { url } = context.params as any; // = [ 'analisis-tecnico', 'indicadores' ];
		let type: GuiaOrCategory = "";
		let urlConcat = ""

		if (url && Array.isArray(url)) urlConcat = url.join('@');

		const [category, guia, lastGuias]: [ICategory, IGuia, IGuia[]] = await Promise.all([
			GuiaStore.getCategory(urlConcat),
			GuiaStore.getGuia(urlConcat),
			GuiaStore.getGuias(6, "DESC") //TODO hay que traerse 7 y quitar en el que estamos si existe
		]);

		let relationedPosts: IPost[] = [];

		if (!Utils.isObjectEmpty(guia)) {
			type = "guia";
			//GuiaStore.getGuias(6, "DESC", ["tag.id", guia.category.id])
			//TODO hay que hacer los posts relacionados, o los sacamos de los que tengan el ultimo tag que el
			// o los mas recientes en caso de que no haya o que sea de la raiz
		}

		if (!Utils.isObjectEmpty(category)) {
			if (!category.landing) throw new Error("Tiene category sin landing") // TODO mejor hacer todo al final
			type = "category";
		}

		if (type === "") throw new Error("No tiene landing ni guia")

		return {
			props: {
				type,
				guia,
				category,
				relationedPosts,
				lastGuias
			}
		}
	}
	catch (error) {
		throw new Error("Ha fallado algo");
	}
};
