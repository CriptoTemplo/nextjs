import React, { Component } from "react";
import { IEmpty, IPost } from "@/definitions/definitions"; // TODO esto habra que mejorarlo
import DOMPurify from "isomorphic-dompurify";
import Global from "@/definitions/global";
import Utils from "@/utils/utils";
import Image from "next/image";

export default class ReadPost extends Component<IPost, IEmpty> {

    public constructor(props: IPost) {
        super(props);
    }

    // After the component did mount
    public componentDidMount() {
    }

    public render() {
        if (Utils.isObjectEmpty(this.props)) return "";

        let upperPost: JSX.Element = this.upperPost();
        let midPost: JSX.Element = this.midPost();
        let lowerPost: JSX.Element = this.lowerPost();

        return (
            <div className="readPost">
                {upperPost}
                {midPost}
                {/*lowerPost*/}
            </div>
        );
    }

    private upperPost(): JSX.Element {
        const post: IPost = this.props;
        return (
            <div>
                <h1 className="title">
                    {post.title}
                </h1>
                <div className="extraInfo">
                    <div className="difficulty">
                        <span>
                            {post.difficulty}
                        </span>
                    </div>
                    <div className="readTime">
                        <i className="icon" />
                        <span> {post.readTime + "min."} </span>
                    </div>
                    <div className="publishedDate">
                        {"Publicación: " + this.formatDate(this.props.published_at)}
                    </div>
                    <div className="updatedDate">
                        {"Actualización: " + this.formatDate(this.props.updatedAt)}
                    </div>
                </div>
                <div className="wrapperImage">
                    <Image className="coverImage"
                        src={Global.host + post.coverImage?.url}
                        alt={post.coverImage.alternativeText}
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        );
    }

    private midPost(): JSX.Element {
        const test = this.mountHtmlContent();

        return (
            <div>
                {test}
            </div>
        );
    }

    private lowerPost(): JSX.Element {
        return (
            <div>
                Lower
            </div>
        );
    }

    private mountHtmlContent(): JSX.Element {
        return (
            <div>
                {<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.content) }} />}
            </div>
        );
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
