import React from 'react';
import Article, { IArticleProps } from "@/components/Article";
import RankingCrypto, { IRankingCryptoProps } from "@/containers/rankingCrypto/rankingCrypto";
import SectionWrapper, { ISectionWrapperProps } from "@/components/SectionWrapper";
import { IRow, IStrapiCrypto } from "@/definitions/crypto";
import { ILanding, IMediaPost, IPost } from "@/definitions/mediaPost";
import CryptoStore from "@/stores/CryptoStore";
import GlobalStore from "@/stores/GlobalStore";
import PostStore from "@/stores/PostStore";
import { getHead, IMetaTags } from "@/utils/helmet";
import { GetServerSideProps } from "next";

interface ICriptomonedasProps {
	landingInfo: ILanding;
	posts: IMediaPost[];
	cryptos: IStrapiCrypto[];
}

export default function Criptomonedas(props: ICriptomonedasProps) {
	let [rankingStart, setRankingStart] = React.useState(0);
	const [cryptos, setCryptos] = React.useState<IStrapiCrypto[]>(props.cryptos);

	const getSectionWrapperProps = (): ISectionWrapperProps => {
		return {
			title: "Últimas Publicaciones",
			posts: props.posts as unknown as IMediaPost[]
		}
	}

	const getArticleProps = (): IArticleProps => {
		return {
			content: props.landingInfo.content
		}
	}

	const getRankingCryptoProps = (): IRankingCryptoProps => {
		return {
			cryptos: cryptos,
			headers: CRankingHeaders
		}
	}

	const CRankingHeaders: IRow[] = [
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

	const showMore = async (): Promise<void> => {
		try {
			setRankingStart(rankingStart += 25);
			const cryptosAux: IStrapiCrypto[] = await CryptoStore.getStrapiCryptoAll(rankingStart, 25);
			setCryptos([...cryptos, ...cryptosAux]);
		}
		catch (err) {
			console.error(err);
		}
	}

	const getMetaTags = (): IMetaTags => {
		return {
			title: props.landingInfo.MetaTags.title,
			description: props.landingInfo.MetaTags.description,
			canonical: "/criptomonedas",
			published_time: props.landingInfo.published_at,
			modified_time: props.landingInfo.updatedAt
		};
	};

	return (
		<>
			{getHead(getMetaTags())}
			<div className="home">
				<div className="articleWrapper">
					<Article {...getArticleProps()} />
				</div>
				<div className="rankingCryptoWrapper">
					<RankingCrypto {...getRankingCryptoProps()} />
					<div className="showMore">
						<div className="button" onClick={() => showMore()}>▽ Mostrar más</div>
					</div>
				</div>
				<div className="sectionWrapper latestPosts">
					<SectionWrapper {...getSectionWrapperProps()} />
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<ICriptomonedasProps> = async () => {
	try {
		const [landingInfo, auxPosts, cryptos]: [ILanding, IPost[], IStrapiCrypto[]] = await Promise.all([
			GlobalStore.getLandingCriptomonedas(),
			PostStore.getCryptoPosts(),
			CryptoStore.getStrapiCryptoAll(0, 25)
		]);

		const posts: IMediaPost[] = auxPosts.map((post: IPost) => {
			const aux: IMediaPost = post.Post;
			aux.published_at = post.published_at;
			aux.updatedAt = post.updatedAt;
			return aux;
		})

		return {
			props: {
				posts,
				landingInfo,
				cryptos
			}
		};
	}
	catch (error) {
		throw new Error("Ha fallado algo");
	}
};
