import * as React from 'react';
import Table, { ITableProps } from "../../components/table/table";
import GlobalCache from "../../definitions/cache";
import { ECryptoFields, IRow, IRowContent, IStrapiCrypto } from "../../definitions/crypto";
import Global from "../../definitions/global";
import Utils from "../../utils/utils";
import withRouter, { WithRouter } from "../../utils/withRouter";

export interface IRankingCryptoProps {
	cryptos: IStrapiCrypto[];
	headers: IRow[];
}

export interface IRankingCryptoState {
}

type IRankingCryptoPropsType = IRankingCryptoProps & WithRouter;

class RankingCrypto extends React.Component<IRankingCryptoPropsType, IRankingCryptoState> {
	constructor(props: IRankingCryptoPropsType) {
		super(props);

		this.state = {
		}
	}

	public render() {
		if (Utils.isObjectEmpty(this.props)) return "";

		return (
			<>
				<Table {...this.getTableProps()} />
			</>
		);
	}

	private getTableProps(): ITableProps {
		return {
			TableProps: {
				headers: this.props.headers,
				rows: this.constructRows()
			}
		}
	}

	private constructRows(): any {
		return this.props.cryptos.map((crypto: IStrapiCrypto) => {
			return [
				crypto.market_cap_rank
				,
				this.switchCryptoFields(crypto, ECryptoFields.name)
				,
				this.switchCryptoFields(crypto, ECryptoFields.price)
				,
				this.switchCryptoFields(crypto, ECryptoFields.price24h)
				,
				this.switchCryptoFields(crypto, ECryptoFields.market_cap)
				,
				this.switchCryptoFields(crypto, ECryptoFields.volume24h)
				,
				this.switchCryptoFields(crypto, ECryptoFields.circulating_supply)
			]
		})
	}

	private switchCryptoFields(crypto: IStrapiCrypto, type: ECryptoFields): IRowContent {
		switch (type) {
			case ECryptoFields.name:
				return this.getName(crypto);
			case ECryptoFields.price:
				// TODO shiba inu no se vera con esto
				return GlobalCache.numberFormatter2decimals.format(crypto.current_price) + "$";
			case ECryptoFields.price24h:
				return this.getPrice24h(crypto.price_change_percentage_24h);
			case ECryptoFields.volume24h:
				return GlobalCache.numberFormatter.format(crypto.total_volume) + "$";
			case ECryptoFields.market_cap:
				return GlobalCache.numberFormatter.format(crypto.market_cap) + "$";
			case ECryptoFields.market_cap_rank:
				return crypto.market_cap_rank;
			case ECryptoFields.circulating_supply:
				return GlobalCache.numberFormatter0decimals.format(crypto.circulating_supply);
		}
	}

	private getName(crypto: IStrapiCrypto): JSX.Element {
		return (
			<a href={Global.hostFront + "/criptomonedas/" + crypto.slug} onClick={(e) => { e.preventDefault(); this.redirect(crypto.slug)}}>
				<span className="name">{crypto.name}</span>
			</a>
		);
	}

	private getPrice24h(number: number): JSX.Element {
		return (
			<span className={Math.sign(number) >= 0 ? "greenText" : "redText"}>{GlobalCache.numberFormatter2decimals.format(number) + "%"}</span>
		);
	}

	private redirect(slug: string): void {
		const postLink: string = "/criptomonedas/" + slug;
		this.props.navigateWrapped(postLink);
	}
}

export default withRouter(RankingCrypto);
