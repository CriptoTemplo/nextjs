import * as React from 'react';
import Global from "../definitions/global";
import { IMediaPost } from "../definitions/mediaPost";
import withRouter, { WithRouter } from "../utils/withRouter";
import Image from 'next/image'

export interface ISectionWrapperProps {
	posts: IMediaPost[];
	title: string;
}

export interface ISectionWrapperState {
}

type ISectionWrapperPropsType = ISectionWrapperProps & WithRouter;

class SectionWrapper extends React.Component<ISectionWrapperPropsType, ISectionWrapperState> {

	constructor(props: ISectionWrapperPropsType) {
		super(props);

		this.state = {
		}
	}

	public render() {

		return (
			<div className="sectionWrapperPosts">
				<div className="title">
					<span>
						{this.props.title}
					</span>
				</div>
				<div className="postsWrapper">
					{this.renderSectionPostAll()}
				</div>
			</div>
		);
	}

	private renderSectionPost(post: IMediaPost, index: number): JSX.Element { // TODO Hacer una clase que sea post
		return (
			<div className="post" key={index} onClick={() => this.redirect(post.url)}>
				<a href={Global.hostFront + "/" + post.url} onClick={(e) => e.preventDefault()}>
					<div className="imageWrapper">
						<Image className="coverImage"
							src={Global.host + post.coverImage.formats.small.url}
							alt={post.coverImage.alternativeText}
							width={300}
							height={300}
						/>
					</div>
					<div className="content">
						<span className="cardTitle">
							{post.title}
						</span>
						<div className="extraInfo">
							<div className="difficulty">
								<span>
									{post.difficulty}
								</span>
							</div>
							<div className="publishedDate">
								{this.formatDate(post.updatedAt)}
							</div>
							<div className="readTime">
								<i className="icon"/>
								<span> {post.readTime + "min."} </span>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}

	private renderSectionPostAll(): JSX.Element[] {
		return this.props.posts.map((post: IMediaPost, index: number) => {
			return this.renderSectionPost(post, index);
		})
	}

	private redirect(URL: string): void {
		const postLink: string = "/" + URL;
		this.props.navigateWrapped(postLink);
	}

	private formatDate(date: string): string {
		const auxDate: Date = new Date(date);
		const options: Intl.DateTimeFormatOptions = {
			month: "short"
		}
		let month:string = auxDate.toLocaleDateString("es-ES", options);
		month = month.charAt(0).toUpperCase() + month.slice(1);
		return (auxDate.getDate() + " " + month + "," + " " + auxDate.getFullYear())
	}
}

export default withRouter(SectionWrapper);
