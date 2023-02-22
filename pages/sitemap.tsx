import * as React from 'react';
import GlobalStore from "../stores/GlobalStore";
import DOMPurify from 'isomorphic-dompurify';
import { ISitemap } from "../definitions/mediaPost";

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
                {<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.state.content) }} />}
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
