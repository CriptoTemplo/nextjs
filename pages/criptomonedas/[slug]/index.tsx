import { IStrapiCrypto } from "@/definitions/crypto";
import { IGuia, ILanding, IPost } from "@/definitions/definitions";
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from "querystring";
import { getHead, IMetaTags } from "@/utils/helmet";
import CryptoStore from "@/stores/CryptoStore";
import Utils from "@/utils/utils";
import CryptoCard, { ICryptoCardProps } from "@/components/cryptoCard/cryptoCard";
import MediaPost, { IMediaPostProps } from "@/containers/mediaPost";
import SectionWrapper, { ISectionWrapperProps } from "@/components/sectionWrapper";
import DOMPurify from 'isomorphic-dompurify';
import GlobalCache from "@/definitions/cache";
import { useRouter } from 'next/router'
import GuiaStore from "@/stores/GuiaStore";

interface ICriptomonedaProps {
	crypto: IStrapiCrypto;
	relationedPosts: IGuia[];
	slug: string;
	template: ILanding;
}

export default function Criptomoneda(props: ICriptomonedaProps) {

	const router = useRouter()

	const coin = {
		name: props.crypto.name,
		ticket: props.crypto.ticket.toUpperCase(),
		currentPrice: GlobalCache.numberFormatter.format(props.crypto.current_price) + "$",
		high24h: GlobalCache.numberFormatter.format(props.crypto.high_24h) + "$",
		low24h: GlobalCache.numberFormatter.format(props.crypto.low_24h) + "$",
		price24h: GlobalCache.numberFormatter2decimals.format(props.crypto.price_change_percentage_24h) + "%",
		totalVolume: GlobalCache.numberFormatter0decimals.format(props.crypto.total_volume) + "$",
		marketCapRank: props.crypto.market_cap_rank,
		marketCap: GlobalCache.numberFormatter0decimals.format(props.crypto.market_cap) + "$",
		marketCapChange24h: GlobalCache.numberFormatter0decimals.format(props.crypto.market_cap_change_24h) + "$",
		marketCapChangePercentage24h: GlobalCache.numberFormatter2decimals.format(props.crypto.market_cap_change_percentage_24h) + "%",
		circulatingSupply: GlobalCache.numberFormatter.format(props.crypto.circulating_supply),
		maxSupply: props.crypto.max_supply ? GlobalCache.numberFormatter.format(props.crypto.max_supply) : "∞",
		supplyPercentage: props.crypto.max_supply ? GlobalCache.numberFormatter2decimals.format((props.crypto.circulating_supply / props.crypto.max_supply) * 100) + "%" : "-",
		atl: GlobalCache.numberFormatter.format(props.crypto.atl) + "$",
		atlDate: GlobalCache.dateFormatter.format(new Date(props.crypto.atl_date)),
		ath: GlobalCache.numberFormatter.format(props.crypto.ath) + "$",
		athDate: GlobalCache.dateFormatter.format(new Date(props.crypto.ath_date)),
		atlRoi: GlobalCache.numberFormatter2decimals.format((props.crypto.current_price / props.crypto.atl) * 100) + "%", // TODO en caso de que no venga lo calculamos nosotros desde atl y ath
		athRoi: GlobalCache.numberFormatter2decimals.format(100 - (props.crypto.current_price / props.crypto.ath) * 100) + "%"
	};

	const getMetaTags = (): IMetaTags => {
		return {
			title: convertLiteral(coin, props.template.MetaTags.title),
			description: convertLiteral(coin, props.template.MetaTags.description),
			canonical: router.asPath,
			published_time: props.crypto.published_at,
			modified_time: props.crypto.updatedAt
		}
	};

	const convertLiteral = (coin: any, literal: string): string => {
		literal = DOMPurify.sanitize(literal)
		return eval('`' + literal + '`');
	};

	const convertMarkDownCrypto = (coin: any, aux: string) => {
		let content: string = GlobalCache.converter.makeHtml(aux);
		return convertLiteral(coin, content);
	};

	const getMediaPostProps = (): IMediaPostProps => {
		let cryptoPost: IGuia = {} as IGuia;
		cryptoPost.Post = {} as IPost;
		cryptoPost.Post.content = convertMarkDownCrypto(coin, props.template.content);
		return {
			post: cryptoPost as any
		}
	}

	const getSectionWrapperProps = (): ISectionWrapperProps => {
		return {
			title: "Últimas Publicaciones",
			guias: props.relationedPosts
		}
	}

	const getCryptoCardProps = (): ICryptoCardProps => {
		return {
			crypto: props.crypto
		}
	}

	return (
		<div className="post">
			{getHead(getMetaTags())}

			<CryptoCard {...getCryptoCardProps()} />

			<div className="mediaPostWrapper">
				<MediaPost {...getMediaPostProps()} />
			</div>

			<div className="sectionWrapper">
				<SectionWrapper {...getSectionWrapperProps()} />
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<ICriptomonedaProps> = async (context) => {

	try {
		// TODO aqui habra que hacer promise.all
		const { slug } = context.params as ParsedUrlQuery;
		if (!slug) throw new Error("Criptomoneda no existente"); // TODO ESTO NO TIENE SENTIDO
		const slugString = slug.toString();
		const crypto: IStrapiCrypto = await CryptoStore.getStrapiCrypto(slugString);
		if (Utils.isObjectEmpty(crypto)) throw new Error("Criptomoneda no existente");
		const posts: IGuia[] = await GuiaStore.getGuias(6, "DESC");
		return {
			props: {
				crypto,
				relationedPosts: posts,
				slug: slugString,
				template: await GlobalCache.cryptoTemplate
			}
		};
	}
	catch (error) {
		throw new Error("Ha fallado algo");
	}
};
