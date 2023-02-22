import ReactDOM from 'react-dom/client';
import * as React from 'react';
import CryptoCalculator, { ICryptoCalculatorProps } from "../components/cryptoCalculator/cryptoCalculator";
import { ICryptoDetailed } from "../definitions/crypto";
import CryptoStore from "../stores/CryptoStore";
import Publisher from "../logic/publisher";

export interface ICryptoUtilitesProps {
	placeholderGraphic: HTMLElement;
	placeholderCryptoCard: HTMLElement;
	placeholderCalculator: HTMLElement;
	idCoin: string;
}

export default class CryptoUtilites {
	private elements: ICryptoUtilitesProps = {} as ICryptoUtilitesProps;
	private publisher: Publisher<React.Component> = new Publisher<React.Component>();
	private aux: ICryptoCalculatorProps = {
		value1: 1, value2: 5, publisher: this.publisher
	}

	public constructor(props: ICryptoUtilitesProps) {
		this.elements = props;

		this.init();
	}

	private async getInfo(): Promise<void> {
		const cryptoDetailed: ICryptoDetailed = await CryptoStore.getCurrentData(this.elements.idCoin);
	}

	private async init() {
		// TODO salta el error por consola porque no existe el div de momento
		const root = ReactDOM.createRoot(
			document.getElementById("calculator") as HTMLElement
		);
		
		const react = React.createElement(CryptoCalculator, this.aux, null);
		root?.render(react);

		/*setTimeout(() => {
			console.log(this.publisher.getSuscriber("calculator"));
		}, 5000)

		setTimeout(() => {
			const test = this.publisher.getSuscriber("calculator");
			console.log("Second", test);
			myProps.value2 = 2131;
			test.forceUpdate();

		}, 10000)*/

		/*setTimeout(() => {
			this.aux.value2 = 451;
			const joder = this.publisher.getSuscriber("calculator")
			joder.setState({
				initialValue1: 1,
				initialValue2: 10,
				value1: 1,
				value2: 10
			})
			//console.log("SON IGUALES?", this.aux === joder.props)
			//const test = this.publisher.notifySuscribers("calculator", null);
		}, 5000)
		*/
	}

	private async onUpdate() {

	}
}