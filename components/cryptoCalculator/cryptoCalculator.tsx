import * as React from 'react';
import Publisher from "../../logic/publisher";

export interface ICryptoCalculatorProps {
	value1: number;
	value2: number;
	publisher: Publisher<React.Component>;
}

export interface ICryptoCalculatorState {
	initialValue1: number;
	initialValue2: number;
	value1: number;
	value2: number;
}

export default class CryptoCalculator extends React.Component<ICryptoCalculatorProps, ICryptoCalculatorState> {
	constructor(props: ICryptoCalculatorProps) {
		super(props);

		this.state = {
			initialValue1: this.props.value1,
			initialValue2: this.props.value2,
			value1: this.props.value1,
			value2: this.props.value2
		}
	}

	/*static getDerivedStateFromProps(nextProps: Readonly<ICryptoCalculatorProps>, prevState: Readonly<ICryptoCalculatorState>) {
		console.log("getDerivedStateFromProps", nextProps, prevState);
		if (nextProps.value1 !== prevState.initialValue1 || nextProps.value2 !== prevState.initialValue2) {
			// TODO calcular diferencia de valores con lo que el usuario ya tenia y actualizar
			// const x = new value 1
			// const y = new value 2
			console.log(nextProps)
			return {
				initialValue1: nextProps.value1,
				initialValue2: nextProps.value2,
				value1: nextProps.value1,
				value2: nextProps.value2
			}
		}
		return null;
	}*/

	public componentDidMount(): void {
		this.props.publisher.addSuscriber("calculator", this);
	}

	public componentDidUpdate(prevProps: Readonly<ICryptoCalculatorProps>, prevState: Readonly<ICryptoCalculatorState>, snapshot?: any): void {
		//console.log("CALCULTAROOOOO");
	}

	/*
	public componentWillReceiveProps(nextProps: Readonly<ICryptoCalculatorProps>, nextContext: any): void {
		//console.log(nextProps);
	}*/

	public render() {
		return (
			<div className="cryptoCalculator">
				<input id={"input1"} value={this.state.value1} onChange={this.onChangeAlt}/>
				<input id={"input2"} value={this.state.value2} onChange={this.onChangeStableCoin}/>
			</div>
		);
	}

	private onChangeAlt = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value1 = Number(event.target.value);
		const aux: number = value1 / this.state.initialValue1;
		const value2 = this.state.initialValue2 * aux;
		this.setState({
			value1,
			value2
		})
	};

	private onChangeStableCoin = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value2 = Number(event.target.value);
		const aux: number = value2 / this.state.initialValue2;
		const value1 = this.state.initialValue1 * aux;
		this.setState({
			value1,
			value2
		})
	};
}
