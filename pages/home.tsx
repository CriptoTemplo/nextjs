import * as React from 'react';
import Article, { IArticleProps } from "../components/article/article";
import SectionWrapper, { ISectionWrapperProps } from "../components/sectionWrapper";
import { ILanding, IMediaPost, IPost } from "../definitions/mediaPost";
import GlobalStore from "../Stores/GlobalStore";
import PostStore from "../Stores/PostStore";
import HelmetUtils, { IMetaTags } from "../utils/helmet";
import Utils from "../utils/utils";

export interface IHomeProps {
}

export interface IHomeState {
	posts: IMediaPost[];
	landingInfo: ILanding;
}

// TODO aqui se deberia inicializar el navigate y el use params y pasar a los hijos la misma referencia

export default class Home extends React.Component<IHomeProps, IHomeState> {
	constructor(props: IHomeProps) {
		super(props);

		this.state = {
			posts: [],
			landingInfo: {} as ILanding
		}
	}

	// After the component did mount
	public async componentDidMount() {
		await this.getPosts();
	}


	public render() {
		// if (Utils.isObjectEmpty(this.state.landingInfo) || !this.state.posts.length) return "";
		return (
			<div className="home">
				{!Utils.isObjectEmpty(this.state.landingInfo) ?
					HelmetUtils.getHead(this.getMetaTags()) : ""}
				<div className="articleWrapper">
					<Article {...this.getArticleProps()} />
				</div>
				<div className="sectionWrapper latestPosts">
					<SectionWrapper {...this.getSectionWrapperProps()} />
				</div>
			</div>
		);
	}

	private getSectionWrapperProps(): ISectionWrapperProps {
		return {
			title: "Últimas Publicaciones",
			posts: this.state.posts
		}
	}

	private getArticleProps(): IArticleProps {
		return {
			content: this.state.landingInfo.content
		}
	}

	private async getPosts(): Promise<void> {
		try {
			const landingInfo: ILanding = await GlobalStore.getLanding();
			const posts: IPost[] = await PostStore.getCryptoPosts();
			const mediaPosts: IMediaPost[] = posts.map((post: IPost) => {
				const aux: IMediaPost = post.Post;
				aux.published_at = post.published_at;
				aux.updatedAt = post.updatedAt;
				return aux;
			})
			this.setState({
				posts: mediaPosts,
				landingInfo
			})
		}
		catch {
			throw new Error("Ha fallado algo");
		}
	}

	private getMetaTags(): IMetaTags {
		return {
			title: this.state.landingInfo.MetaTags.title,
			description: this.state.landingInfo.MetaTags.description,
			canonical: "",
			published_time: this.state.landingInfo.published_at,
			modified_time: this.state.landingInfo.updatedAt
		}
	}
}
