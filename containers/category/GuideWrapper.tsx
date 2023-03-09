import Carousel from "@/components/guia/carousel";
import { ICategory, IGuia } from "@/definitions/definitions";
import global from "@/styles/global.module.scss";
import GlobalCache from "@/definitions/cache";
import button from "@/styles/button.module.scss";
import DOMPurify from 'isomorphic-dompurify';
import * as React from 'react';

export interface IGuideWrapperProps {
}

export interface IGuideWrapperState {
    collapsed: boolean;
}

export default class GuideWrapper extends React.Component<ICategory, IGuideWrapperState> {
    constructor(props: ICategory) {
        super(props);

        this.state = {
            collapsed: this.props.downsideHTML && this.props.guias.length > 3 ? true : false
        }
    }

    public render() {
        const category: ICategory = this.props;
        const showMore: JSX.Element = this.state.collapsed ? this.renderShowMoreButton() : <></>;
        return (
            <div className={global.wrapper}>
                <h1>{category.name}</h1>
                {this.renderUpSide()}
                {this.renderGuides()}
                {showMore}
                {this.renderDownSide()}
            </div>
        );
    }

    private renderGuides(): JSX.Element {
        const guideLength: number = this.props.guias.length;
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

    private renderUpSide(): JSX.Element {
        const content: string = this.props.upsideHTML;
        if (!content) return <></>
        return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.convertMarkDown(content)) }}></div>
    }

    private renderDownSide(): JSX.Element {
        const content: string = this.props.downsideHTML;
        if (!content) return <></>
        return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.convertMarkDown(content)) }}></div>
    }

    private convertMarkDown(content: string): string {
		return GlobalCache.converter.makeHtml(content);
	};
}
