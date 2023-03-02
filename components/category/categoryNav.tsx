import { ICategory, IGuia } from "@/definitions/definitions";
import Link from "next/link";
import * as React from 'react';
import Carousel from "@/components/guia/carousel";

export interface ICategoryNavProps {
}

export interface ICategoryNavState {
}

export default class CategoryNav extends React.Component<ICategory, ICategoryNavState> {
    constructor(props: ICategory) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const category: ICategory = this.props;
        return (
            <div>
                <h2>{category.name}</h2>
                {this.renderGuides()}
                {this.renderNavButton(category.URL)}
            </div>
        );
    }

    private renderGuides(): JSX.Element {
        if (!this.props.guias) return <></>
        const copyGuides: IGuia[] = [...this.props.guias].slice(0, 3);
        return <Carousel {...copyGuides} />
    }

    private renderNavButton(url: string): JSX.Element {
        // TODO Hay que hacer que el boton este sea un componente unico
        return (
            <Link href={url}>
                <div className="button">▷ Ver todos</div>
            </Link>
        )
    }
}
