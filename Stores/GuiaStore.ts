import Global from "@/definitions/global";
import { ITag } from '@/definitions/definitions';
import BasicStore from './BasicStore';
// import {Headers} from 'node-fetch';

export default class GuiaStore {
    // static basicHeaders = this.constructHeaders();
    public static host: string = Global.host;
    
    public static async getLandingGuias(): Promise<ITag> {
        let url = new URL(GuiaStore.host + "/guias")
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getTags(): Promise<ITag> {
        let url = new URL(GuiaStore.host + "/tags")
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getTag(id: string): Promise<ITag> {
        let url = new URL(GuiaStore.host + "/tags/" + id)
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }
}
