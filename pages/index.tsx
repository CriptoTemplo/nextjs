import { GetServerSideProps } from 'next';
import Article from '../components/Article';
import SectionWrapper from '../components/SectionWrapper';
import GlobalStore from "../stores/GlobalStore";
import PostStore from "../stores/PostStore";
import { IMetaTags, getHead } from "../utils/helmet";
import { ILanding, IMediaPost, IPost } from "../definitions/definitions";

interface IProps {
	landingInfo: ILanding;
	posts: IMediaPost[];
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
					<SectionWrapper title="Últimas Publicaciones" posts={props.posts} />
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
	try {
		const [landingInfo, posts]: [ILanding, IPost[]] = await Promise.all([
			GlobalStore.getLanding(),
			PostStore.getCryptoPosts()
		]);
		const mediaPosts: IMediaPost[] = posts.map((post: IPost) => {
			const aux: IMediaPost = post.Post;
			aux.published_at = post.published_at;
			aux.updatedAt = post.updatedAt;
			return aux;
		})
		return {
			props: {
				landingInfo,
				posts: mediaPosts
			}
		}
	} catch (error) {
		throw new Error("Ha fallado algo");
	}
};