import Global from "../definitions/global";
import { IPost, IMediaPost } from '../definitions/definitions';
import BasicStore from './BasicStore';
// import {Headers} from 'node-fetch';

export default class PostStore {
    // static basicHeaders = this.constructHeaders();
    public static host: string = Global.host;
    
    public static async getAllPosts (): Promise<IPost[]> {
        let url = new URL(PostStore.host + "/posts")
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getCryptoPosts (): Promise<IPost[]> {
        let url = new URL(PostStore.host + "/crypto-posts")
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }
    
    public static async getCryptoPost (id: string): Promise<IPost> {
        let url = new URL(PostStore.host + "/crypto-posts/" + id)
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getCryptoArticle (id: string): Promise<IPost> {
        let url = new URL(PostStore.host + "/crypto-articles/" + id)
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }
}
