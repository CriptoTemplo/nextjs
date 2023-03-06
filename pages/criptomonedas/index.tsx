import React from 'react';
import Article, { IArticleProps } from "@/components/Article";
import RankingCrypto, { IRankingCryptoProps } from "@/containers/rankingCrypto/rankingCrypto";
import SectionWrapper, { ISectionWrapperProps } from "@/components/sectionWrapper";
import { IRow, IStrapiCrypto } from "@/definitions/crypto";
import { IGuia, ILanding } from "@/definitions/definitions";
import CryptoStore from "@/stores/CryptoStore";
import GlobalStore from "@/stores/GlobalStore";
import { getHead, IMetaTags } from "@/utils/helmet";
import { GetServerSideProps } from "next";
import GuiaStore from "@/stores/GuiaStore";

interface ICriptomonedasProps {
	landingInfo: ILanding;
	guias: IGuia[];
	cryptos: IStrapiCrypto[];
}

export default function Criptomonedas(props: ICriptomonedasProps) {
	let [rankingStart, setRankingStart] = React.useState(0);
	const [cryptos, setCryptos] = React.useState<IStrapiCrypto[]>(props.cryptos);

	const getSectionWrapperProps = (): ISectionWrapperProps => {
		return {
			title: "Últimas Publicaciones",
			guias: props.guias
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
		const [landingInfo, guias, cryptos]: [ILanding, IGuia[], IStrapiCrypto[]] = await Promise.all([
			GlobalStore.getLandingCriptomonedas(),
			GuiaStore.getGuias(6, "DESC"),
			CryptoStore.getStrapiCryptoAll(0, 25)
		]);

		return {
			props: {
				guias,
				landingInfo,
				cryptos
			}
		};
	}
	catch (error) {
		throw new Error("Ha fallado algo");
	}
};
