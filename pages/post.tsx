import * as React from 'react';
import SectionWrapper, { ISectionWrapperProps } from "../components/sectionWrapper";
import { IPost, IMediaPost } from "../definitions/mediaPost";
import PostStore from "../Stores/PostStore";
import withRouter, { WithRouter } from "../utils/withRouter";
import MediaPost, { IMediaPostProps } from "../containers/mediaPost";
import CryptoCard, { ICryptoCardProps } from "../components/cryptoCard/cryptoCard";
import { IStrapiCrypto } from "../definitions/crypto";
import CryptoStore from "../Stores/CryptoStore";
import Utils from "../utils/utils";
import HelmetUtils, { IMetaTags } from "../utils/helmet";
import GlobalCache from '../definitions/cache';

export interface IPostProps {
}

export interface IPostState {
	cryptoPost: IPost;
	relationedPosts: IMediaPost[];
	crypto: IStrapiCrypto;
}

type IPostPropsType = IPostProps & WithRouter;

class Post extends React.Component<IPostPropsType, IPostState> {

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
	}

	public async componentDidUpdate(prevProps: Readonly<IPostPropsType>, prevState: Readonly<IPostState>, snapshot?: any): Promise<void> {
		if (prevProps.location.pathname !== this.props.location.pathname) await this.getPosts();
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

			if (!Utils.isObjectEmpty(cryptoPost)) {
				const content: string = cryptoPost.Post.content;
				cryptoPost.Post.content = this.convertMarkDown(content);
			}

			if (Utils.isObjectEmpty(cryptoPost) && Utils.isObjectEmpty(crypto)) {
				this.props.navigateWrapped("/");
			}

			this.setState({
				relationedPosts,
				crypto,
				cryptoPost
			}, () => {
				if (!this.props.checkHistory(this.props.location.key)) window.scrollTo({ top: 0, behavior: 'smooth' });
			});
		}
		catch {
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

	// TODO hay que hacer los templates para el title y description por defecto
	private getMetaTags(): IMetaTags {
		const aux: IMetaTags = {
			title: this.constructDefaultTitle(),
			description: this.constructDefaultDescription(),
			canonical: this.props.location.pathname,
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
		return (data1 < data2 ? data2 : data1);
	}

	private compareDataHigher(data1: string, data2: string): string {
		return (data1 > data2 ? data1 : data2);
	}

	private convertMarkDown(content: string): string {
		return GlobalCache.converter.makeHtml(content);
	}
}

export default withRouter(Post);