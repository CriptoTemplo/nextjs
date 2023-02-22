import * as React from 'react';
import { ICryptoDetailed, IStrapiCrypto } from "../../definitions/crypto";
import CryptoStore from "../../stores/CryptoStore";
import Utils from "../../utils/utils";
import "../../styles/cryptoCard.module.scss";

export interface ICryptoCardProps {
	crypto: IStrapiCrypto;
}

export interface ICryptoCardState {
	cryptoDetailed: ICryptoDetailed;
}

// TODO cada x segundos volvemos a coger los datos y hacemos un setState
export default class CryptoCard extends React.Component<ICryptoCardProps, ICryptoCardState> {
	constructor(props: ICryptoCardProps) {
		super(props);

		this.state = {
			cryptoDetailed: {} as ICryptoDetailed
		}
	}

	// After the component did mount
	public async componentDidMount() {
		if (!Utils.isObjectEmpty(this.props.crypto)) {
			// TODO en paralelo recuperamos la info de la moneda y los datos de la gráfica
			await this.getInfo();
		}
	}

	public async componentDidUpdate(prevProps: Readonly<ICryptoCardProps>, prevState: Readonly<ICryptoCardState>, snapshot?: any) {
		if (!Utils.isObjectEmpty(this.props.crypto) && prevProps.crypto.slug !== this.props.crypto.slug) {
			// TODO en paralelo recuperamos la info de la moneda y los datos de la gráfica
			await this.getInfo();
		}
	}

	public shouldComponentUpdate(nextProps: Readonly<ICryptoCardProps>, nextState: Readonly<ICryptoCardState>, nextContext: any): boolean {
		// if (nextProps.post.id === this.props.post?.id) return false;

		return true;
	} //TODO en caso de que cambien las props hay que ver cual es el flujo correcto, quiza haya que hacer un wrapper
	// o dividir la logica de cargar y la de mostrar datos

	public render() {
		if (Utils.isObjectEmpty(this.props.crypto) || Utils.isObjectEmpty(this.state.cryptoDetailed)) return "";

		return (
			<div className="cryptoCard">
				<div className="mainData">
					<div className="imgRank">
						<img src={this.state.cryptoDetailed.image.small} 
							alt={"Logo de la Criptomoneda " + this.state.cryptoDetailed.name}/>
						{/*<span>Puesto {this.state.cryptoDetailed.market_cap_rank}</span>*/}
					</div>
					<span>{this.state.cryptoDetailed.name}</span>
					<span className="symbol">&nbsp;{"(" + this.state.cryptoDetailed.symbol.toUpperCase() + ")"}</span>
				</div>
				<div className="property">
					<span className="left">Precio</span>
					<span className="right">{this.formatNumber(this.state.cryptoDetailed.market_data?.current_price.usd)}</span>
				</div>
				<div className="property">
					<span className="left">Puesto</span>
					<span className="right">{this.state.cryptoDetailed.market_data.market_cap_rank}</span>
				</div>
				<div className="property">
					<span className="left">Cap. de Mercado</span>
					<span className="right">{this.formatNumber(this.state.cryptoDetailed.market_data?.market_cap.usd)}</span>
				</div>
				<div className="property">
					<span className="left">Acciones en Circulación</span>
					<span className="right">{this.formatNumber(this.state.cryptoDetailed.market_data.circulating_supply, true)}</span>
				</div>
				<div className="property">
					<span className="left">Acciones Totales</span>
					<span className="right">{this.formatNumber(this.state.cryptoDetailed.market_data.max_supply, true)}</span>
				</div>
				<div className="property">
					<span className="left">Máximo Histórico</span>
					<span className="right">{this.formatNumber(this.state.cryptoDetailed.market_data.ath.usd)}</span>
				</div>
				<div className="property">
					<span className="left">Mínimo Histórico</span>
					<span className="right">{this.formatNumber(this.state.cryptoDetailed.market_data.atl.usd)}</span>
				</div>
			</div>
		);
	}

	private formatNumber(value: number, withoutDollar?: boolean): string {
		if (!value) return "-";
		const x = new Intl.NumberFormat('es-ES');
		return x.format(value) + (withoutDollar ? "" : "$");
	}

	private async getInfo(): Promise<void> {
		const cryptoDetailed: ICryptoDetailed = await CryptoStore.getCurrentData(this.props.crypto.idCoin);
		this.setState({
			cryptoDetailed
		})
	}
}
