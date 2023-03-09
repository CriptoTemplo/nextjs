import Global from "@/definitions/global";
import BasicStore from './BasicStore';
import { IAuthor } from '@/definitions/definitions';

export default class AuthorStore {
    public static host: string = Global.host + "/authors";
    
    public static async find(): Promise<IAuthor[]> {
        let url = new URL(AuthorStore.host)
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async findOne(Url: string): Promise<IAuthor> {
        let url = new URL(AuthorStore.host + "/" + Url)
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }
}
