import * as React from 'react';
import { ICryptoDetailed, IStrapiCrypto } from "../../definitions/crypto";
import CryptoStore from "../../stores/CryptoStore";
import Utils from "../../utils/utils";
import styles from "../../styles/cryptoCard.module.scss";
import Image from 'next/image'

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


	public render() {
		const crypto: IStrapiCrypto = this.props.crypto;
		return (
			<div className={styles.cryptoCard}>
				<div className={styles.mainData}>
					<div className={styles.imgRank}>
						<Image src={crypto.image} 
							alt={"Logo de la Criptomoneda " + crypto.name}
							width={50}
							height={50}
						/>
						{/*<span>Puesto {crypto.market_cap_rank}</span>*/}
					</div>
					<span>{crypto.name}</span>
					<span className={styles.symbol}>&nbsp;{"(" + crypto.ticket.toUpperCase() + ")"}</span>
				</div>
				<div className={styles.property}>
					<span className={styles.left}>Precio</span>
					<span className={styles.right}>{this.formatNumber(crypto.current_price)}</span>
				</div>
				<div className={styles.property}>
					<span className={styles.left}>Puesto</span>
					<span className={styles.right}>{crypto.market_cap_rank}</span>
				</div>
				<div className={styles.property}>
					<span className={styles.left}>Cap. de Mercado</span>
					<span className={styles.right}>{this.formatNumber(crypto.market_cap)}</span>
				</div>
				<div className={styles.property}>
					<span className={styles.left}>Acciones en Circulación</span>
					<span className={styles.right}>{this.formatNumber(crypto.circulating_supply, true)}</span>
				</div>
				<div className={styles.property}>
					<span className={styles.left}>Acciones Totales</span>
					<span className={styles.right}>{this.formatNumber(crypto.max_supply, true)}</span>
				</div>
				<div className={styles.property}>
					<span className={styles.left}>Máximo Histórico</span>
					<span className={styles.right}>{this.formatNumber(crypto.ath)}</span>
				</div>
				<div className={styles.property}>
					<span className={styles.left}>Mínimo Histórico</span>
					<span className={styles.right}>{this.formatNumber(crypto.atl)}</span>
				</div>
			</div>
		);
	}

	private formatNumber(value: number, withoutDollar?: boolean): string {
		if (!value) return "-";
		const x = new Intl.NumberFormat('es-ES');
		return x.format(value) + (withoutDollar ? "" : "$");
	}
}
