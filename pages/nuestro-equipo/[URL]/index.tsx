import { GetServerSideProps } from 'next';
import { IMetaTags, getHead } from "@/utils/helmet";
import { IAuthor, IGuia } from "@/definitions/definitions";
import AuthorStore from "@/stores/AuthorStore";
import global from "@/styles/global.module.scss";
import Author from "@/containers/author/author";
import CarouselWrapper from "@/components/carouselWrapper";
import GuiaStore from "@/stores/GuiaStore";

interface IProps {
	author: IAuthor;
	authorPosts: IGuia[];
}

export default function AuthorServer(props: IProps) {

	const getMetaTags = (): IMetaTags => {
		return {
			title: props.author.MetaTags.title,
			description: props.author.MetaTags.description,
			canonical: "/nuestro-equipo/" + props.author.URL,
			published_time: props.author.published_at,
			modified_time: props.author.updatedAt
		}
	};

	return (
		<>
			{getHead(getMetaTags(), true)}
			<div className={global.wrapper}>
				<Author {...props.author} />
				<CarouselWrapper guias={[...props.authorPosts]} title={"ÚLTIMAS PUBLICACIONES DEL AUTOR"} />
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<IProps> = async (context) => {
	try {
		const { URL } = context.params as any; // = [ 'analisis-tecnico', 'indicadores' ];
		const [author, authorPosts]: [IAuthor, IGuia[]] = await Promise.all([
			AuthorStore.findOne(URL),
			GuiaStore.getGuiasFromAuthor(URL)
		]);
		return {
			props: {
				author,
				authorPosts
			}
		}
	}
	catch (error) {
		throw new Error("Ha fallado algo");
	}
};
