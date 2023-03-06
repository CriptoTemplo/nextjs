import * as React from 'react';
import Global from "../definitions/global";
import { IGuia, IPost } from "../definitions/definitions";
import withRouter, { WithRouter } from "../utils/withRouter";
import Image from 'next/image'

export interface ISectionWrapperProps {
	guias: IGuia[];
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

	private renderSectionPost(guia: IGuia, index: number): JSX.Element { // TODO Hacer una clase que sea post
		const post: IPost = guia.Post;
		const imageSrc: string = post.coverImage.formats.small ? post.coverImage.formats.small.url : post.coverImage.formats.thumbnail.url
		return (
			<div className="post" key={index} onClick={() => this.redirect(guia.URL)}>
				<a href={Global.hostFront + "/guias/" + guia.URL} onClick={(e) => e.preventDefault()}>
					<div className="imageWrapper">
						<Image className="coverImage"
							src={Global.host + imageSrc}
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
								{this.formatDate(guia.updatedAt)}
							</div>
							<div className="readTime">
								<i className="icon" />
								<span> {post.readTime + "min."} </span>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}

	private renderSectionPostAll(): JSX.Element[] {
		return this.props.guias?.map((guia: IGuia, index: number) => {
			return this.renderSectionPost(guia, index);
		})
	}

	private redirect(URL: string): void {
		const postLink: string = "/guias/" + URL;
		this.props.navigateWrapped(postLink);
	}

	private formatDate(date: string): string {
		const auxDate: Date = new Date(date);
		const options: Intl.DateTimeFormatOptions = {
			month: "short"
		}
		let month: string = auxDate.toLocaleDateString("es-ES", options);
		month = month.charAt(0).toUpperCase() + month.slice(1);
		return (auxDate.getDate() + " " + month + "," + " " + auxDate.getFullYear())
	}
}

export default withRouter(SectionWrapper);
