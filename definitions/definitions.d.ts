import { IMetaTags } from "../utils/helmet";
import { ICrypto, IStrapiCrypto } from "./crypto";

export interface IEmpty {};

export type IMediaPostType = "Article" | "Tutorial" | "News";


// TODO todos los campos de base de datos deberian de heredar de un top que tuviera los basicos id, fecha creacion, etc
export interface IPost {
    id: number;
    title: string;
    content: string;
    //type: IMediaPostType;
    readTime: number;
    coverImage: IMedia;
    url: string;
    difficulty: string;
    published_at: string;
    updatedAt: string;
    createdAt: string;
}

export interface IGuia {
    id: string;
    _id: string;
    URL: string;
    Post: IPost;
    MetaTags: IMetaTags;
    published_at: string;
    updatedAt: string;
    createdAt: string;
    crypto: IStrapiCrypto;
    categories: ICategory[];
    //TODO habra que anyadir aqui las empresas cuando esten
}

export interface IMediaPost {
    id: number;
    URL: string;
    Post: IMediaPost;
    MetaTags: IMetaTags;
    published_at: string;
    updatedAt: string;
    createdAt: string;
    crypto: ICrypto;
}

export interface IEntity {
    name: string;
}

export interface ISection {
    crypoPost: IPost[];
    cryptoArticle: IPost[];
}

export interface IMedia {
    alternativeText: string;
    caption: string;
    createdAt: string;
    ext: string;
    formats: IMediaFormatWrapper;
    hash: string;
    height: number;
    id: string;
    mime: string;
    name: string;
    provider: string;
    related: string[];
    size: number
    updatedAt: string;
    url: string;
    width: number;
}

export interface IMediaFormat {
    ext: string;
    hash: string;
    height: number;
    mime: string;
    name: string;
    path: string;
    size: number;
    url: string;
    width: number;
}

export interface IMediaFormatWrapper {
    large: IMediaFormat;
    medium: IMediaFormat;
    small: IMediaFormat;
    thumbnail: IMediaFormat;
}

export interface ILanding {
    id: string;
    content: string;
    MetaTags: IMetaTags;
    createdAt: string;
    published_at: string;
    updatedAt: string;
}

export interface ISitemap {
    content: string;
}

export interface ICategory {
    id: string;
    crypto: IStrapiCrypto;
    entites: Object[];
    guias: IGuia[];
    categories: ICategory[];
    name: string;
    landing: boolean;
    description: string;
    upsideHTML: string;
    downsideHTML: string;
    MetaTags: IMetaTags;
    URL: string;
    createdAt: string;
    published_at: string;
    updatedAt: string;
}

export interface IAuthor {
    name: string;
    profilePic: IMedia;
    biography: string;
    education: string;
    specialty: string;
    abilities: string;
    URL: string;
    socialNetworks: ISocialNetworks;
    MetaTags: IMetaTags;
    createdAt: string;
    published_at: string;
    updatedAt: string;
    quote: string;
    job: string;
}

export interface ISocialNetworks {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
}
