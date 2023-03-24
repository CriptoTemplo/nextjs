import { GetServerSideProps } from 'next';
import { IMetaTags, getHead } from "@/utils/helmet";
import { IAuthor, ILanding } from "@/definitions/definitions";
import AuthorStore from "@/stores/AuthorStore";
import global from "@/styles/global.module.scss";
import Author from "@/containers/author/author";
import GlobalStore from "@/stores/GlobalStore";
import AuthorCarousel from "@/containers/author/authorCarousel";
import Article from "@/components/Article";

interface IProps {
	authors: IAuthor[];
	landing: ILanding;
}

export default function SobreNosotros(props: IProps) {

	const getMetaTags = (): IMetaTags => {
		return {
			title: props.landing.MetaTags.title,
			description: props.landing.MetaTags.description,
			canonical: "/nuestro-equipo",
			published_time: props.landing.published_at,
			modified_time: props.landing.updatedAt
		}
	};

	return (
		<>
			{getHead(getMetaTags())}
			<div className={global.wrapper}>
				<Article content={props.landing.content} />
				<AuthorCarousel {...props.authors} />
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<IProps> = async (context) => {
	try {
		const [authors, landing]: [IAuthor[], ILanding] = await Promise.all([
			AuthorStore.find(),
			GlobalStore.getLandingAboutUs()
		]);
		return {
			props: {
				authors,
				landing
			}
		}
	}
	catch (error) {
		throw new Error("Ha fallado algo");
	}
};
