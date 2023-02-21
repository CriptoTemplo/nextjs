import { ICrypto, ICryptoDetailed, IHistorical, IStrapiCrypto } from '../definitions/crypto';
import BasicStore from './BasicStore';
import PostStore from "./PostStore";
// import {Headers} from 'node-fetch';

// https://www.coingecko.com/es/api/documentation

export default class CryptoStore {
    // static basicHeaders = this.constructHeaders();
    private static host: string = "https://api.coingecko.com/api/v3";
    
    public static async getAllCoins(page?: number, per_page?: number): Promise<ICrypto[]> {
        let url = new URL(CryptoStore.host + "/coins/markets");
        url.searchParams.append('vs_currency', "usd");
        url.searchParams.append('order', "market_cap_desc");
        url.searchParams.append('page', (page || 1).toString());
        url.searchParams.append('per_page', (per_page || 250).toString());
        
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    /*  Get historical market data include price, market cap, and 24h volume (granularity auto)

        Data granularity is automatic (cannot be adjusted)
        1 day from current time = 5 minute interval data
        1 - 90 days from current time = hourly data
        above 90 days from current time = daily data (00:00 UTC)
    */
    public static async getHistoricalCoin(id: string, days: number): Promise<IHistorical> {
        let url = new URL(CryptoStore.host + "/coins/" + id + "/market_chart")
        url.searchParams.append('vs_currency', "usd");
        url.searchParams.append('days', days.toString());
        // Aqui hay un parametro mas llamado interval, imagino que para poner HOURLY, DAILY, WEEKLY, MONTHLY, ETC...
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    /*  Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)

        Data granularity is automatic (cannot be adjusted)
        1 day from current time = 5 minute interval data
        1 - 90 days from current time = hourly data
        above 90 days from current time = daily data (00:00 UTC)
    */
    public static async getHistoricalCoinRange(id: string, from: number, to: number): Promise<IHistorical> {
        let url = new URL(CryptoStore.host + "/coins/" + id + "/market_chart/range")
        url.searchParams.append('vs_currency', "usd");
        url.searchParams.append('from', from.toString());
        url.searchParams.append('to', to.toString());

        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getCurrentData(id: string): Promise<ICryptoDetailed> {
        let url = new URL(CryptoStore.host + "/coins/" + id);
        url.searchParams.append('localization', "false");
        url.searchParams.append('tickers', "false");
        url.searchParams.append('market_data', "true");
        url.searchParams.append('community_data', "false");
        url.searchParams.append('developer_data', "false");
        url.searchParams.append('sparkline', "false");

        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getStrapiCrypto(slug: string): Promise<IStrapiCrypto> {
        let url = new URL(PostStore.host + "/cryptos/" + slug);

        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

    public static async getStrapiCryptoAll(page?: number, per_page?: number, sortField?: string): Promise<IStrapiCrypto[]> {
        let url = new URL(PostStore.host + "/cryptos");
        url.searchParams.append('_sort', sortField || "market_cap_rank");
        url.searchParams.append('_start', (page || 0).toString());
        url.searchParams.append('_limit', (per_page || 100).toString());
        
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }

	public static async getStrapiCryptoCount(): Promise<number> {
        let url = new URL(PostStore.host + "/cryptos/count");
        
        const urlString = url.toString();

        return BasicStore.baseFetch(urlString, "GET", "");
    }
}
