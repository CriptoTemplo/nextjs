import { IGuia } from "@/definitions/definitions";
import * as React from 'react';
import GuiaCard from "./card";
import styles from "@/styles/carousel.module.scss";

export interface ICarouselProps {
}

export interface ICarouselState {
}

// TODO anyadir recursividad para las guia card en caso de que sea h2 en vez de h3
export default class Carousel extends React.Component<IGuia[], ICarouselState> {
	constructor(props: IGuia[]) {
		super(props);

		this.state = {
		}
	}

	public render() {
		return (
			<div className={styles.carousel}>
				{this.renderElements()}
			</div>
		);
	}

	private renderElements() {
		const array: IGuia[] = Object.values(this.props);
		return array.map((guia: IGuia, index: number) => {
            return (
                <GuiaCard key={index} {...guia} />
            )
        })
	}
}
