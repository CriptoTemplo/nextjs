import * as React from 'react';
import GlobalStore from "../../Stores/GlobalStore";
import createDOMPurify from 'dompurify';
import './sitemapmodule.scss';import { ISitemap } from "../../definitions/mediaPost";

export interface ISitemapProps {
}

export interface ISitemapState {
	content: string;
}

export default class Sitemap extends React.Component<ISitemapProps, ISitemapState> {
	constructor(props: ISitemapProps) {
		super(props);

		this.state = {
			content: ""
		}
	}


	public render() {
		return (
            <>
                {<div dangerouslySetInnerHTML={{ __html: createDOMPurify.sanitize(this.state.content) }} />}
            </>
		);
	}

	public componentDidMount(): void {
		this.getSitemap();
	}

	private async getSitemap(): Promise<void> {
		const sitemapHTML: ISitemap = await GlobalStore.getSitemap();
		const content = sitemapHTML.content;
		this.setState({content});
	}
}
