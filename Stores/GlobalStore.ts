import Global, { IHeader } from "../definitions/global";
import { ILanding, ISitemap } from "../definitions/mediaPost";
import BasicStore from './BasicStore';

export default class GlobalStore {
    
    public static async getHeader(): Promise<IHeader> {
        let url = new URL(Global.host + "/header");
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getFooter(): Promise<IHeader> {
        let url = new URL(Global.host + "/footer");
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getLanding(): Promise<ILanding> {
        let url = new URL(Global.host + "/landing");
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getLandingCriptomonedas(): Promise<ILanding> {
        let url = new URL(Global.host + "/landing-criptomonedas");
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

	public static async getLandingExchanges(): Promise<ILanding> {
        let url = new URL(Global.host + "/landing-exchanges");
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getCryptoTemplate(): Promise<ILanding> {
        let url = new URL(Global.host + "/crypto-template");
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getSitemap(): Promise<ISitemap> {
        let url = new URL(Global.host + "/sitemap");
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }
}
