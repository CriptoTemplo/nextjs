import * as React from 'react';
import SectionWrapper, { ISectionWrapperProps } from "../components/SectionWrapper";
import { IPost, IMediaPost, ILanding } from "../definitions/mediaPost";
import PostStore from "../stores/PostStore";
import withRouter, { WithRouter } from "../utils/withRouter";
import MediaPost, { IMediaPostProps } from "../containers/mediaPost";
import CryptoCard, { ICryptoCardProps } from "../components/cryptoCard/cryptoCard";
import { IStrapiCrypto } from "../definitions/crypto";
import CryptoStore from "../stores/CryptoStore";
import Utils from "../utils/utils";
import HelmetUtils, { IMetaTags } from "../utils/helmet";
import createDOMPurify from 'dompurify';
import GlobalCache from "../definitions/cache";
import CryptoUtilites, { ICryptoUtilitesProps } from "../containers/cryptoUtilites";

export interface IPostProps {
}

export interface IPostState {
	cryptoPost: IPost;
	relationedPosts: IMediaPost[];
	crypto: IStrapiCrypto;
}

type IPostPropsType = IPostProps & WithRouter;

class CryptoData extends React.Component<IPostPropsType, IPostState> {
	private cryptoUtilities: CryptoUtilites | undefined;

	constructor(props: IPostPropsType) {
		super(props);

		this.state = {
			cryptoPost: {} as IPost,
			relationedPosts: [],
			crypto: {} as IStrapiCrypto
		}
	}

	// After the component did mount
	public async componentDidMount() {
		// TODO Crear las promesas de forma paralela y esperar a que ambas se resuelvan
		await this.getPosts();
		this.cryptoUtilities = new CryptoUtilites(this.getCryptoUtilitesProps());
	}

	public async componentDidUpdate(prevProps: Readonly<IPostPropsType>, prevState: Readonly<IPostState>, snapshot?: any): Promise<void> {
		if (prevProps.router.pathname !== this.props.router.pathname) await this.getPosts();

		const h1s = document.getElementsByTagName("h1");
        if (h1s.length > 1) h1s[1].remove();
	}

	public shouldComponentUpdate(nextProps: Readonly<IPostPropsType>, nextState: Readonly<IPostState>, nextContext: any): boolean {
		//if (nextProps.location.pathname === this.props.location?.pathname) return false;

		return true;
	}

	public render() {
		if (Utils.isObjectEmpty(this.state.cryptoPost) && !this.state.relationedPosts.length
			&& Utils.isObjectEmpty(this.state.crypto)) return "";

		return (
			<div className="post">
				{HelmetUtils.getHead(this.getMetaTags())}

				<CryptoCard {...this.getCryptoCardProps()} />
				{/* TODO CAMBIAR LO DE ABAJO, SINO TIENE NADA SE RENDERIZA EL COMPONENTE VACIO. */}
				{
					Utils.isObjectEmpty(this.state.cryptoPost) || !this.state.relationedPosts.length ? "" :
						<div className="mediaPostWrapper">
							<MediaPost {...this.getMediaPostProps()} />
						</div>
				}
				<div className="sectionWrapper">
					<SectionWrapper {...this.getSectionWrapperProps()} />
				</div>
			</div>
		);
	}

	private async getPosts(): Promise<void> {
		try {
			// TODO esto debe de hacerse con promesas paralelas
			let params: any, relationedPosts: IMediaPost[], crypto: IStrapiCrypto, cryptoPost: IPost;
			if (Object.keys(this.props.params).length === 1) {
				params = (this.props.params as any).post;
				cryptoPost = (await PostStore.getCryptoPost(params));
				relationedPosts = await this.getCryptoPosts();
				crypto = await CryptoStore.getStrapiCrypto(params);
			}
			else {
				params = (this.props.params as any).tag + "@" + (this.props.params as any).post;
				cryptoPost = (await PostStore.getCryptoArticle(params));
				relationedPosts = await this.getCryptoPosts();
				crypto = {} as IStrapiCrypto;
			}

			if (Utils.isObjectEmpty(cryptoPost) && Utils.isObjectEmpty(crypto)) {
				this.props.navigateWrapped("/criptomonedas");
			}

            const test: ILanding = await GlobalCache.cryptoTemplate;
			const coin = {
				name: crypto.name,
				ticket: crypto.ticket.toUpperCase(),
				currentPrice: GlobalCache.numberFormatter.format(crypto.current_price) + "$",
				high24h: GlobalCache.numberFormatter.format(crypto.high_24h) + "$",
				low24h: GlobalCache.numberFormatter.format(crypto.low_24h) + "$",
				price24h: GlobalCache.numberFormatter2decimals.format(crypto.price_change_percentage_24h) + "%",
				totalVolume: GlobalCache.numberFormatter0decimals.format(crypto.total_volume) + "$",
				marketCapRank: crypto.market_cap_rank,
				marketCap: GlobalCache.numberFormatter0decimals.format(crypto.market_cap) + "$",
				marketCapChange24h: GlobalCache.numberFormatter0decimals.format(crypto.market_cap_change_24h) + "$",
				marketCapChangePercentage24h: GlobalCache.numberFormatter2decimals.format(crypto.market_cap_change_percentage_24h) + "%",
				circulatingSupply: GlobalCache.numberFormatter.format(crypto.circulating_supply),
				maxSupply: crypto.max_supply ? GlobalCache.numberFormatter.format(crypto.max_supply) : "∞",
				supplyPercentage: crypto.max_supply ? GlobalCache.numberFormatter2decimals.format((crypto.circulating_supply / crypto.max_supply)*100) + "%" : "-",
				atl: GlobalCache.numberFormatter.format(crypto.atl) + "$",
				atlDate: GlobalCache.dateFormatter.format(new Date(crypto.atl_date)),
				ath: GlobalCache.numberFormatter.format(crypto.ath) + "$",
				athDate: GlobalCache.dateFormatter.format(new Date(crypto.ath_date)),
				atlRoi: GlobalCache.numberFormatter2decimals.format((crypto.current_price / crypto.atl)*100) + "%", // TODO en caso de que no venga lo calculamos nosotros desde atl y ath
				athRoi: GlobalCache.numberFormatter2decimals.format(100 - (crypto.current_price / crypto.ath)*100) + "%"
			};

			if (!Utils.isObjectEmpty(cryptoPost)) {
				const content: string = cryptoPost.Post.content;
				cryptoPost.Post.content = this.convertMarkDown(content);
			    cryptoPost.Post.content += this.convertMarkDownCrypto(coin, test.content);
			}
			else {
				cryptoPost.Post = {} as IMediaPost;
                cryptoPost.Post.content = this.convertMarkDownCrypto(coin, test.content);
			}

			if (!cryptoPost.MetaTags) {
				cryptoPost.MetaTags = {
					title: this.convertLiteral(coin, test.MetaTags.title),
					description: this.convertLiteral(coin, test.MetaTags.description)
				};
			}

			this.setState({
				relationedPosts,
				crypto,
				cryptoPost
			}, () => {
				if (!this.props.checkHistory(this.props.router.asPath)) window.scrollTo({ top: 0, behavior: 'smooth' });
			});
		}
		catch (error) {
			console.log(error)
			//TODO en caso de que no exista el post
			throw new Error("Ha fallado algo");
		}
	}

	private async getCryptoPosts(): Promise<IMediaPost[]> {
        try {
            const posts:IPost[] = await PostStore.getCryptoPosts();
			return posts.map((post: IPost) => {
				const aux: IMediaPost = post.Post;
				aux.published_at = post.published_at;
				aux.updatedAt = post.updatedAt;
				return aux;
			})
        }
        catch {
            throw new Error ("Ha fallado algo con getCryptoPosts");
        }
    }

	private getMediaPostProps(): IMediaPostProps {
		return {
			post: this.state.cryptoPost,
			relationedPosts: this.state.relationedPosts
		}
	}

	private getSectionWrapperProps(): ISectionWrapperProps {
		return {
			title: "Últimas Publicaciones",
			posts: this.state.relationedPosts
		}
	}

	private getCryptoCardProps(): ICryptoCardProps {
		return {
			crypto: this.state.crypto
		}
	}

	private getCryptoUtilitesProps(): ICryptoUtilitesProps {
		const x = document.getElementById('calculator') as HTMLElement;
		return {
			placeholderGraphic: x,
			placeholderCryptoCard: x,
			placeholderCalculator: x,
			idCoin: this.state.crypto.idCoin
		}
	}

	// TODO hay que hacer los templates para el title y description por defecto
	private getMetaTags(): IMetaTags {
		const aux: IMetaTags = {
			title: this.constructDefaultTitle(),
			description: this.constructDefaultDescription(),
			canonical: this.props.router.pathname,
			published_time: this.compareDataLesser(this.state.cryptoPost.published_at, this.state.crypto.published_at),
			modified_time: this.compareDataHigher(this.state.cryptoPost.updatedAt, this.state.crypto.updatedAt)
		}

		if (!Utils.isObjectEmpty(this.state.cryptoPost)) {
			aux.title = this.state.cryptoPost.MetaTags.title;
			aux.description = this.state.cryptoPost.MetaTags.description;
		}

		return aux;
	}

	private constructDefaultTitle(): string {
		return "¿Qué es " + this.state.crypto.name + "? Todo lo que necesitas saber sobre " + this.state.crypto.slug;
	}

	private constructDefaultDescription(): string {
		return "";
	}

	private compareDataLesser(data1: string, data2: string): string {
		return (data1 && data1 < data2 ? data1 : data2);
	}

	private compareDataHigher(data1: string, data2: string): string {
		return (data1 > data2 ? data1 : data2);
	}

	private convertMarkDown(content: string): string {
		return GlobalCache.converter.makeHtml(content);
	}

	// TODO: en caso de necesitar un template especial para una cripto en concreto, la tactica a seguir seria:
	// crear un campo content para todas las cryptos y rellenarlo en caso de que sea estrictamente necesario algo unico
	// const content = (crypto.content ? crypto.content : defaultTemplate);
	private convertMarkDownCrypto(coin: any, aux: string) {
		let content: string = this.convertMarkDown(aux);
		return this.convertLiteral(coin, content);
	}

	private convertLiteral(coin: any, literal: string): string {
		literal = createDOMPurify.sanitize(literal)
		return eval('`' + literal + '`');
	}
}

export default withRouter(CryptoData);
