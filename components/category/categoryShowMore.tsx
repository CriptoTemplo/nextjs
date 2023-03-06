import { ICategory, IGuia } from "@/definitions/definitions";
import * as React from 'react';
import Carousel from "@/components/guia/carousel";
import button from "@/styles/button.module.scss";

export interface ICategoryShowMoreProps {
}

export interface ICategoryShowMoreState {
    collapsed: boolean;
}

export default class CategoryShowMore extends React.Component<ICategory, ICategoryShowMoreState> {
    constructor(props: ICategory) {
        super(props);

        this.state = {
            collapsed: true
        }
    }

    public render() {
        const category: ICategory = this.props;
        const guideLength: number = this.props.guias.length;
        const showMore: JSX.Element = guideLength > 3 && this.state.collapsed ? this.renderShowMoreButton() : <></>;
        return (
            <div>
                <h2>{category.name}</h2>
                {this.renderGuides(guideLength)}
                {showMore}
            </div>
        );
    }

    private renderGuides(guideLength: number): JSX.Element {
        if (!guideLength) return <></>
        const maxGuidesToShow: number = this.state.collapsed ? 3 : guideLength;
        const copyGuides: IGuia[] = [...this.props.guias].slice(0, maxGuidesToShow);
        return <Carousel {...copyGuides} />
    }

    private renderShowMoreButton(): JSX.Element {
        // TODO Hay que hacer que el boton este sea un componente unico
        return (
            <div className={`${button.button} ${button.showMore}`} onClick={() => this.showMore()}>▽ Mostrar más</div>
        )
    }

    private showMore(): void {
        this.setState({collapsed: false});
    }
}
