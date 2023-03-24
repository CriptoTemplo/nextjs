import styles from "@/styles/authorCarousel.module.scss";
import * as React from 'react';

export interface ICarouselButtonsProps {
    elements: JSX.Element[];
    resizeDangerous?: boolean;
    hideButtons?: boolean;
	positionChangesOnTick?: number;
}

export interface ICarouselButtonsState {
	canGoNext: boolean;
	canGoPrev: boolean;
}

type TDirection = "next" | "previous";

export default class CarouselButtons extends React.Component<ICarouselButtonsProps, ICarouselButtonsState> {
	private carouselRef: React.RefObject<HTMLDivElement> = React.createRef();
	private carouselContainerRef: React.RefObject<HTMLDivElement> = React.createRef();

	constructor(props: ICarouselButtonsProps) {
		super(props);

		this.state = {
			canGoPrev: false,
			canGoNext: false
		}
	}

    public componentDidUpdate(prevProps: Readonly<ICarouselButtonsProps>, prevState: Readonly<ICarouselButtonsState>, snapshot?: any): void {
        if (this.props.hideButtons) {
            const buttons = Array.from((this.carouselContainerRef.current as HTMLDivElement).querySelectorAll("button"));
            buttons[0].style.display = !this.state.canGoPrev ? "none" : ""; // Left Button
            buttons[1].style.display = !this.state.canGoNext ? "none" : ""; // Right Button
        }
    }

	public componentDidMount(): void {
        if (this.props.resizeDangerous) window.addEventListener('resize', this.handleResize);
		if (this.elementsHidden(this.carouselRef.current as HTMLDivElement)) {
			this.setState({
				canGoNext: true
			})
		}
	}

	public componentWillUnmount(): void {
		if (this.props.resizeDangerous) window.removeEventListener('resize', this.handleResize);
	}

	public render() {
		const elements: JSX.Element[] = this.props.elements;
		return (
			<div className={styles.carouselContainer} ref={this.carouselContainerRef}>
				<button className={styles.button} onClick={() => this.handleNavigation("previous")} disabled={!this.state.canGoPrev}>
					<i className={styles.left} />
				</button>
				<div className={styles.carousel} ref={this.carouselRef}>
					{elements.map((element: JSX.Element, index: number) => <React.Fragment key={index}>{element}</React.Fragment>)}
				</div>
				<button className={styles.button} onClick={() => this.handleNavigation("next")} disabled={!this.state.canGoNext} >
					<i className={styles.right} />
				</button>
			</div>
		);
	}

	private handleNavigation(direction: TDirection): void {
		const container = (this.carouselRef.current as HTMLDivElement);
		const absoluteScrollNumber: number = container.scrollWidth / container.children.length;
		const scrollNumber = direction === "next" ? absoluteScrollNumber : -absoluteScrollNumber;
		container.scrollBy({
			left: scrollNumber * (this.props.positionChangesOnTick ?? 1), // TODO AQUI
			behavior: "smooth"
		})

		// HACK hacemos la suma de scrollLeft porque no tenemos este dato en tiempo real
		// como esta behavior: "smooth", este valor no lo vemos reflejado hasta que vuelve a hacer un setState
		const containerScrollLeft = container.scrollLeft + scrollNumber * (this.props.positionChangesOnTick ?? 1);
		this.setState({
			canGoPrev: this.canScrollLeft(containerScrollLeft),
			canGoNext: this.canScrollRight(container, containerScrollLeft)
		})
	}

	private canScrollLeft(containerScrollLeft: number): boolean {
		return containerScrollLeft > 0;
	}

	// HACK hacemos la suma de + 3 porque gracias a la exactitud de javascript vamos perdiendo precision
	private canScrollRight(container: HTMLDivElement, containerScrollLeft: number): boolean {
		const scrollMax: number = container.scrollWidth - container.clientWidth;
		return containerScrollLeft + 3 < scrollMax;
	}

	// HACK Hacemos esto porque como cambia el ancho de los elementos de dentro, se desalinean los elementos
	private handleResize = () => {
		const container = (this.carouselRef.current as HTMLDivElement);
		const scrollNumber = -container.scrollWidth;
		container.scrollBy({
			left: scrollNumber,
			behavior: "smooth"
		})

		this.setState({
			canGoPrev: this.canScrollLeft(scrollNumber),
			canGoNext: this.canScrollRight(container, scrollNumber)
		})
	}

	private elementsHidden(container: HTMLDivElement): boolean {
		return container.scrollWidth > container.clientWidth;
	}
}
