import CategoryNav from "@/components/category/categoryNav";
import CategoryShowMore from "@/components/category/categoryShowMore";
import GlobalCache from "@/definitions/cache";
import { ICategory, IGuia } from "@/definitions/definitions";
import global from "@/styles/global.module.scss";
import DOMPurify from 'isomorphic-dompurify';
import * as React from 'react';

export interface ICategoryWrapperProps {
}

export interface ICategoryWrapperState {
}

export default class CategoryWrapper extends React.Component<ICategory, ICategoryWrapperState> {
    constructor(props: ICategory) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className={global.wrapper}>
                <h1>{this.props.name}</h1>
                {this.renderUpSide()}
                {this.renderCategories()}
                {this.renderDownSide()}
            </div>
        );
    }

    private renderCategories(): JSX.Element[] {
        return this.props.categories.map((category: ICategory, index: number) => {
            return this.renderCategory(category, index);
        })
    }

    private renderCategory(category: ICategory, index: number): JSX.Element {
        if (category.categories.length) return <CategoryNav key={index} {...this.getGuiasFromCategoryWrapper(category)} />
        return category.landing ? <CategoryNav key={index} {...category} /> : <CategoryShowMore key={index} {...category} />
    }

    private getGuiasFromCategoryWrapper(category: ICategory): ICategory {
        let guides: IGuia[] = [];
        for (const auxCategory of category.categories) {
            guides = guides.concat(auxCategory.guias)
            if (guides.length > 2) break;
        }
        
        const categoryCopy: ICategory = {...category};
        categoryCopy.guias = guides;
        categoryCopy.categories = [];

        return categoryCopy;
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
