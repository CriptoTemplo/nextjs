import { IMetaTags } from "../utils/helmet";

export interface IEmpty {};

export type IMediaPostType = "Article" | "Tutorial" | "News";

export interface IMediaPost {
    id: number;
    dateTime: Date;
    title: string;
    content: string;
    type: IMediaPostType;
    readTime: number;
    coverImage: IMedia;
    crypto: ICrypto [];
    entity: IEntity [];
    url: string;
    difficulty: string;
    published_at: string;
    updatedAt: string;
    createdAt: string;
}

export interface IPost {
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
