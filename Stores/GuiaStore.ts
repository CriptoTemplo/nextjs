import Global from "@/definitions/global";
import { IGuia, ICategory } from '@/definitions/definitions';
import BasicStore from './BasicStore';
// import {Headers} from 'node-fetch';

export type TOrder = "DESC" | "ASC";

export default class GuiaStore {
    // static basicHeaders = this.constructHeaders();
    public static host: string = Global.host;
    
    //TODO esta mal
    public static async getLandingGuias(): Promise<ICategory> {
        let url = new URL(GuiaStore.host + "/guias")
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getCategories(): Promise<ICategory> {
        let url = new URL(GuiaStore.host + "/categories")
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getCategoriesCustom(where?: [string, string], populate?: string): Promise<ICategory> {
        let url = new URL(GuiaStore.host + "/categories")
        if (where) url.searchParams.append('_where', "[" + where[0] + "]" + "=" + where[1]);
        if (populate) url.searchParams.append('_populate', populate); // TODO Esta mierda no va

        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }


    public static async getCategory(id: string): Promise<ICategory> {
        let url = new URL(GuiaStore.host + "/categories/" + id)
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getGuias(limit?: number, order?: TOrder, nonUrl?: string, where?: [string, string]): Promise<IGuia[]> {
        let url = new URL(GuiaStore.host + "/guias");
        url.searchParams.append('_limit', (limit || 100).toString());
        url.searchParams.append('_sort', "createdAt:" + (order || "DESC"));
        if (nonUrl) url.searchParams.append('URL_ne', nonUrl);
        if (where) url.searchParams.append('_where', "[" + where[0] + "]" + "=" + where[1]);
        
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getGuia(id: string): Promise<IGuia> {
        let url = new URL(GuiaStore.host + "/guias/" + id)
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getGuiasFindRelationedGuias(categories: string[], nonUrl: string): Promise<IGuia[]> {
        let url = new URL(GuiaStore.host + "/guias/findRelationedGuias");
        url.searchParams.append('categories', categories.join(','));
        url.searchParams.append('url', nonUrl);
        
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }
}
