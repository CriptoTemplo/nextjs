import { GetServerSideProps } from 'next';
import { IMetaTags, getHead } from "@/utils/helmet";
import GuiaStore from "@/stores/GuiaStore";
import { ICategory, IGuia, IPost } from "@/definitions/definitions";
import Utils from "@/utils/utils";
import Post, { IPostProps } from "@/containers/post";
import CryptoCard, { ICryptoCardProps } from "@/components/cryptoCard/cryptoCard";
import { useRouter } from "next/router";
import SectionWrapper, { ISectionWrapperProps } from "@/components/sectionWrapper";
import CategoryWrapper from "@/containers/category/CategoryWrapper";
import GuideWrapper from "@/containers/category/GuideWrapper";
import { useEffect } from "react";
import Global from "@/definitions/global";

type GuiaOrCategory = "guia" | "category" | "";

interface IGuiaProps {
	type: GuiaOrCategory;
	guia: IGuia;
	category: ICategory;
	relationedGuias: IGuia[];
	lastGuias: IGuia[];
}

export default function Guia(props: IGuiaProps) {

	useEffect(() => {
		if (!Utils.isObjectEmpty(props.guia)) {
			try {
				GuiaStore.incrementViews(props.guia._id);
			}
			catch (error) {
				console.error('Failed to increment views:', error);
			}
		}
	}, [props]);

	const router = useRouter();

	const getPostProps = (): IPostProps => {
		let guia: IGuia = props.guia;
		const relationedPosts: IPost[] = props.relationedGuias.map((guia: IGuia) => {
			const aux: IPost = guia.Post;
			aux.url = "guias/" + guia.URL;
			return aux;
		});
		return {
			guia,
			relationedPosts: relationedPosts,
			url: Global.hostFront + router.asPath
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
							<SectionWrapper {...getSectionWrapperProps()} /> {/* TODO cambiar esto por un carousel */}
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

	const constructLastGuias = (lastGuias: IGuia[]): IGuia[] => {
		return lastGuias.slice(0, 6);
	}

	const removeRepeated = (lastGuias: IGuia[], relationedGuias: IGuia[]): IGuia[] => {
		return lastGuias.filter((guiaA: IGuia) => !relationedGuias.some((guiaB: IGuia) => guiaA.id === guiaB._id));
	}

	const constructRelationedGuias = (lastGuias: IGuia[], relationedGuias: IGuia[]): IGuia[] => {
		const relationedGuiasLength: number = relationedGuias.length;
		if (relationedGuiasLength < 5) {
			const auxAdd: number = 5 - relationedGuiasLength;
			const slicedElements: IGuia[] = lastGuias.splice(0, auxAdd);
			return relationedGuias.concat(slicedElements);
		}

		return relationedGuias;
	}

	try {
		const { url } = context.params as any; // = [ 'analisis-tecnico', 'indicadores' ];
		let type: GuiaOrCategory = "";
		let urlConcat = ""

		if (url && Array.isArray(url)) urlConcat = url.join('@');
		const nonUrl: string = url.join('/');

		const [category, guia, auxLastGuias]: [ICategory, IGuia, IGuia[]] = await Promise.all([
			GuiaStore.getCategory(urlConcat),
			GuiaStore.getGuia(urlConcat),
			GuiaStore.getGuias(11, "DESC", nonUrl)
		]);

		let lastGuias: IGuia[] = auxLastGuias;
		let relationedGuias: IGuia[] = [];

		if (!Utils.isObjectEmpty(guia)) {
			type = "guia";
			const categoriesId = guia.categories.map((category: ICategory) => category.id);
			relationedGuias = await GuiaStore.getGuiasFindRelationedGuias(categoriesId, nonUrl);
			lastGuias = removeRepeated(lastGuias, relationedGuias);
			relationedGuias = constructRelationedGuias(lastGuias, relationedGuias);
		}

		if (!Utils.isObjectEmpty(category)) {
			if (!category.landing) throw new Error("Tiene category sin landing") // TODO mejor hacer todo al final
			type = "category";
		}

		if (type === "") throw new Error("No tiene landing ni guia")

		lastGuias = constructLastGuias(lastGuias);

		return {
			props: {
				type,
				guia,
				category,
				relationedGuias,
				lastGuias
			}
		}
	}
	catch (error) {
		console.log(error)
		throw new Error("Ha fallado algo");
	}
};
