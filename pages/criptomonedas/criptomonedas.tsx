import * as React from 'react';
import Article, { IArticleProps } from "../../components/article/article";
import RankingCrypto, { IRankingCryptoProps } from "../../containers/rankingCrypto/rankingCrypto";
import SectionWrapper, { ISectionWrapperProps } from "../../components/sectionWrapper";
import { IRow, IStrapiCrypto } from "../../definitions/crypto";
import { ILanding, IMediaPost, IPost } from "../../definitions/mediaPost";
import CryptoStore from "../../Stores/CryptoStore";
import GlobalStore from "../../Stores/GlobalStore";
import PostStore from "../../Stores/PostStore";
import HelmetUtils, { IMetaTags } from "../../utils/helmet";
import Utils from "../../utils/utils";

export interface ICriptomonedasProps {
}

export interface ICriptomonedasState {
	posts: IMediaPost[];
	landingInfo: ILanding;
	cryptos: IStrapiCrypto[];
}

export default class Criptomonedas extends React.Component<ICriptomonedasProps, ICriptomonedasState> {

	private rankingStart: number = 0;

	constructor(props: ICriptomonedasProps) {
		super(props);

		this.state = {
			posts: [],
			landingInfo: {} as ILanding,
			cryptos: []
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
				<div className="rankingCryptoWrapper">
					<RankingCrypto {...this.getRankingCryptoProps()} />
					<div className="showMore">
						<div className="button" onClick={() => this.showMore()}>▽ Mostrar más</div>
					</div>
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

	private getRankingCryptoProps(): IRankingCryptoProps {
		return {
			cryptos: this.state.cryptos,
			headers: CRankingHeaders
		}
	}

	private async getPosts(): Promise<void> {
		try {
			const landingInfo: ILanding = await GlobalStore.getLandingCriptomonedas();
			const posts: IPost[] = await PostStore.getCryptoPosts();
			const cryptos: IStrapiCrypto[] = await CryptoStore.getStrapiCryptoAll(this.rankingStart, 25);
			const mediaPosts: IMediaPost[] = posts.map((post: IPost) => {
				const aux: IMediaPost = post.Post;
				aux.published_at = post.published_at;
				aux.updatedAt = post.updatedAt;
				return aux;
			})
			this.setState({
				posts: mediaPosts,
				landingInfo,
				cryptos
			})
		}
		catch {
			throw new Error("Ha fallado algo");
		}
	}

	private async showMore(): Promise<void> {
		try {
			this.rankingStart += 25;
			const cryptosAux: IStrapiCrypto[] = await CryptoStore.getStrapiCryptoAll(this.rankingStart, 25);
			const cryptos: IStrapiCrypto[] = this.state.cryptos.concat(cryptosAux);

			this.setState({
				cryptos
			})
		}
		catch {
			throw new Error("Ha fallado algo en showMore");
		}
	}

	private getMetaTags(): IMetaTags {
		return {
			title: this.state.landingInfo.MetaTags.title,
			description: this.state.landingInfo.MetaTags.description,
			canonical: "/criptomonedas",
			published_time: this.state.landingInfo.published_at,
			modified_time: this.state.landingInfo.updatedAt
		}
	}
}

// TODO No se si pasar esto a la base de datos o que cojones
export const CRankingHeaders: IRow[] =
	[
		{
			"display": "#",
			"field": "market_cap_rank"
		},
		{
			"display": "Nombre",
			"field": "name"
		},
		{
			"display": "Precio",
			"field": "current_price"
		},
		{
			"display": "24h %",
			"field": "price_change_percentage_24h"
		},
		{
			"display": "Cap. de Mercado",
			"field": "market_cap"
		},
		{
			"display": "Volumen (24h)",
			"field": "total_volume"
		},
		{
			"display": "Acciones en Circulación",
			"field": "circulating_supply"
		}
	];
