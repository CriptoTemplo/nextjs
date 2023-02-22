import * as React from 'react';
import { ILanding, IMediaPost, IPost } from "../definitions/mediaPost";
import HelmetUtils, { IMetaTags } from "../utils/helmet";
import Utils from "../utils/utils";
import Article, { IArticleProps } from "../components/article";
import GlobalStore from "../Stores/GlobalStore";

export interface IExchangesProps {
}

export interface IExchangesState {
	posts: IMediaPost[];
	landingInfo: ILanding;
}

export default class Exchanges extends React.Component<IExchangesProps, IExchangesState> {
	constructor(props: IExchangesProps) {
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
		return (
			<div className="home">
				{!Utils.isObjectEmpty(this.state.landingInfo) ?
					HelmetUtils.getHead(this.getMetaTags()) : ""}
				<div className="articleWrapper">
					<Article {...this.getArticleProps()} />
				</div>
			</div>
		);
	}

	private getArticleProps(): IArticleProps {
		return {
			content: this.state.landingInfo.content
		}
	}

	private async getPosts(): Promise<void> {
		try {
			const landingInfo: ILanding = await GlobalStore.getLandingExchanges();
			this.setState({
				posts: [],
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
			canonical: "/exchanges", // TODO hay que hacer un archivo de definiciones con las rutas
			published_time: this.state.landingInfo.published_at,
			modified_time: this.state.landingInfo.updatedAt
		}
	}
}
