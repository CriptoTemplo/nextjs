import * as React from 'react';

export interface IReturnTopProps {
}

export interface IReturnTopState {
}

export default class ReturnTop extends React.Component<IReturnTopProps, IReturnTopState> {

	private element: React.RefObject<HTMLDivElement> = React.createRef();
	private active: boolean = false;

	constructor(props: IReturnTopProps) {
		super(props);

		this.state = {
		}
	}

	public componentDidMount(): void {
		this.initScrollEvent();
	}

	public render() {
		return (
			<div className="returnTop" ref={this.element} onClick={() => this.scrollTop()}/>
		);
	}

	private initScrollEvent(): void {
		document.addEventListener("scroll", () => this.checkScrollPosition()); // NO HACE FALTA DESTRUIRLO PORQUE SIEMPRE ESTA ACTIVO
	}

	private toggleButton(): void {
		(this.element.current as HTMLDivElement).classList.toggle("show");
	}

	private checkScrollPosition():void {
		const scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
		if (!this.active && scrollTop > 100) {
			this.active = true;
			return this.toggleButton();
		}
		if (this.active && scrollTop < 100) {
			this.active = false;
			return this.toggleButton();
		}
	}

	private scrollTop(): void {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}
