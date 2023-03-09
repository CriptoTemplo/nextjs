import AuthorCard from "@/components/author/authorCard";
import { IAuthor } from "@/definitions/definitions";
import styles from "@/styles/authorCarousel.module.scss";
import * as React from 'react';

export interface IAuthorCarouselProps {
}

export interface IAuthorCarouselState {
	canGoNext: boolean;
	canGoPrev: boolean;
}

type TDirection = "next" | "previous";

// TODO rename de esto a carouselButton
export default class AuthorCarousel extends React.Component<IAuthor[], IAuthorCarouselState> {
	private carouselRef: React.RefObject<HTMLDivElement> = React.createRef();
	private carouselContainerRef: React.RefObject<HTMLDivElement> = React.createRef();

	constructor(props: IAuthor[]) {
		super(props);

		this.state = {
			canGoPrev: false,
			canGoNext: true
		}
	}

	public componentDidMount(): void {
		window.addEventListener('resize', this.handleResize);
	}

	public componentWillUnmount(): void {
		window.removeEventListener('resize', this.handleResize);
	}

	public render() {
		const authors: IAuthor[] = Object.values(this.props);
		const authorCards: JSX.Element[] = this.renderAuthorCars(authors);
		return (
			<>
			<h2 className={styles.h2}>Nuestro equipo</h2>
			<div className={styles.carouselContainer} ref={this.carouselContainerRef}>
				<button className={styles.button} onClick={() => this.handleNavigation("previous")} disabled={!this.state.canGoPrev}>
					<i className={styles.left} />
				</button>
				<div className={styles.carousel} ref={this.carouselRef}>
					{authorCards}
				</div>
				<button className={styles.button} onClick={() => this.handleNavigation("next")} disabled={!this.state.canGoNext} >
					<i className={styles.right} />
				</button>
			</div>
			</>
		);
	}

	private renderAuthorCars(authors: IAuthor[]): JSX.Element[] {
		return authors.map((author: IAuthor, index: number) => {
			return (
				<div key={index} className={styles.card}>
					<AuthorCard key={index} {...author} />
				</div>
			)
		})
	}

	private handleNavigation(direction: TDirection): void {
		const container = (this.carouselRef.current as HTMLDivElement);
		const absoluteScrollNumber: number = container.scrollWidth / container.children.length;
		const scrollNumber = direction === "next" ? absoluteScrollNumber : -absoluteScrollNumber;
		container.scrollBy({
			left: scrollNumber,
			behavior: "smooth"
		})

		// HACK hacemos la suma de scrollLeft porque no tenemos este dato en tiempo real
		// como esta behavior: "smooth", este valor no lo vemos reflejado hasta que vuelve a hacer un setState
		const containerScrollLeft = container.scrollLeft + scrollNumber;
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
}
