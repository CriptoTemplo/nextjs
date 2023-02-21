export interface ICrypto {
    id: string;
    symbol: string;
    name: string;
    image: string; // URL
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: any;
    last_updated: string;
}

export interface IStrapiCrypto extends ICrypto {
    idCoin: string;
    slug: string;
    ticket: string;
    description: string;
    published_at: string;
    updatedAt: string;
    createdAt: string;
    content: string;
}


interface IDataPrice {
    dataTime: number;
    price: number;
}

export interface IHistorical {
    prices: IDataPrice[];
    market_caps: IDataPrice[];
    total_volumes: IDataPrice[];
}

export interface ICryptoDetailed {
    id: string;
    symbol: string;
    name: string;
    asset_platform_id: string;
    platforms: any;
    detail_platforms: any;
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories: any;
    public_notice: string;
    additional_notices: any;
    description: any;
    links: any;
    image: { thumb: string, small: string, large: string };
    country_origin: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    market_cap_rank: number;
    coingecko_rank: number;
    coingecko_score: number;
    developer_score: number;
    community_score: number;
    liquidity_score: number;
    public_interest_score: number;
    market_data: IMarket_Data;
    public_interest_stats: any;
    status_updates: any;
    last_updated: string;
}

export interface IMarket_Data {
    current_price: ICurrencies;
    total_value_locked: number;
    mcap_to_tvl_ratio: number;
    fdv_to_tvl_ratio: number;
    roi: number;
    ath: ICurrencies;
    ath_change_percentage: ICurrencies;
    ath_date: ICurrencies;
    atl: ICurrencies;
    atl_change_percentage: ICurrencies;
    atl_date: ICurrencies;
    market_cap: ICurrencies;
    market_cap_rank: number;
    fully_diluted_valuation: ICurrencies;
    total_volume: ICurrencies;
    high_24h: ICurrencies;
    low_24h: ICurrencies;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: ICurrencies;
    price_change_percentage_1h_in_currency: ICurrencies;
    price_change_percentage_24h_in_currency: ICurrencies;
    price_change_percentage_7d_in_currency: ICurrencies;
    price_change_percentage_14d_in_currency: ICurrencies;
    price_change_percentage_30d_in_currency: ICurrencies;
    price_change_percentage_60d_in_currency: ICurrencies;
    price_change_percentage_200d_in_currency: ICurrencies;
    price_change_percentage_1y_in_currency: ICurrencies;
    market_cap_change_24h_in_currency: ICurrencies;
    market_cap_change_percentage_24h_in_currency: ICurrencies;
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    last_updated: string;
}

interface ICurrencies {
    usd: number;
    eur: number;
}

export interface ITable {
    headers: IRow[];
    rows: IRowContent[];
}

export type IRowContent = string | JSX.Element | number;
export interface IRow {
    display: string;
    field?: string;
}

export interface ICryptoRow extends IRow {
    case?: ECryptoFields;
}

export enum ECryptoFields {
    name = "name",
    price = "price",
    volume24h = "total_volume",
    market_cap_rank = "market_cap_rank",
    market_cap = "market_cap",
    circulating_supply = "circulating_supply",
    price24h = "price_change_percentage_24h"
}
