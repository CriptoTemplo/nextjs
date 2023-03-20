import { IGuia } from "@/definitions/definitions";
import * as React from 'react';
import Carousel from "./guia/carousel";

export interface ICarouselWrapperProps {
    guias: IGuia[];
    title: string;
}

export interface ICarouselWrapperState {
}

export default class CarouselWrapper extends React.Component<ICarouselWrapperProps, ICarouselWrapperState> {
    constructor(props: ICarouselWrapperProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        if(!this.props.guias.length) return "";
        return (
            <div>
                <h2 style={{textAlign: "center", marginTop: "4rem"}}>{this.props.title}</h2>
                <Carousel {...this.props.guias} />
            </div>
        );
    }
}
