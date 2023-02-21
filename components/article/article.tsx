import * as React from 'react';
import Utils from "../../utils/utils";
import DOMPurify from 'isomorphic-dompurify';
import "./article.module.scss";
import GlobalCache from '../../definitions/cache';

export interface IArticleProps {
	content: string;
}

export interface IArticleState {
}

export default class Article extends React.Component<IArticleProps, IArticleState> {
	constructor(props: IArticleProps) {
		super(props);

		this.state = {
		}
	}

	public render() {
        if (Utils.isObjectEmpty(this.props)) return "";

        return (
            <div className="article">
				{this.mountHtmlContent()}
            </div>
        );
	}

	private mountHtmlContent(): JSX.Element {
		const content = this.convertMarkDown(this.props.content);

        return (
            <>
                {<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />}
            </>
        );
    }

	private convertMarkDown(content: string): string {
		return GlobalCache.converter.makeHtml(content);
	}
}
