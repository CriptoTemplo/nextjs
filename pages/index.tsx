import { GetServerSideProps } from 'next';
import Article from '@/components/Article';
import SectionWrapper from '@/components/SectionWrapper';
import GlobalStore from "@/stores/GlobalStore";
import { IMetaTags, getHead } from "@/utils/helmet";
import { IGuia, ILanding, IMediaPost, IPost } from "@/definitions/definitions";
import GuiaStore from "@/stores/GuiaStore";

interface IProps {
	landingInfo: ILanding;
	guias: IGuia[];
}

export default function Home(props: IProps) {

	const getMetaTags = (): IMetaTags => {
		return {
			title: props.landingInfo.MetaTags.title,
			description: props.landingInfo.MetaTags.description,
			canonical: "",
			published_time: props.landingInfo.published_at,
			modified_time: props.landingInfo.updatedAt
		}
	};

	return (
		<>
			{getHead(getMetaTags())}
			<div className="home">
				<div className="articleWrapper">
					<Article content={props.landingInfo.content} />
				</div>
				<div className="sectionWrapper latestPosts">
					<SectionWrapper title="Últimas Publicaciones" guias={props.guias} />
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
	try {
		const [landingInfo, guias]: [ILanding, IGuia[]] = await Promise.all([
			GlobalStore.getLanding(),
			GuiaStore.getGuias(6, "DESC")
		]);
		return {
			props: {
				landingInfo,
				guias
			}
		}
	} catch (error) {
		throw new Error("Ha fallado algo");
	}
};
