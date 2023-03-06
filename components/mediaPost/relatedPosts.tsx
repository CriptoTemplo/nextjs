import React, { Component } from "react";
import Global from "@/definitions/global";
import { IEmpty, IPost } from "@/definitions/definitions"; // TODO esto habra que mejorarlo
import Utils from "@/utils/utils";
import withRouter, { WithRouter } from "@/utils/withRouter";
import Image from "next/image";
export interface IRelatedPostsProps {
    relatedPosts: IPost[];
}

type IRelatedPostsPropsType = IRelatedPostsProps & WithRouter;

class RelatedPosts extends Component<IRelatedPostsPropsType, IEmpty> {

    public constructor(props: IRelatedPostsPropsType) {
        super(props);
    }

    // After the component did mount
    public componentDidMount() {
    }

    public render() {
        if (Utils.isObjectEmpty(this.props)) return "";

        return (
            <div className="relatedPosts">
                <div className="title">
                    Publicaciones Relacionadas
                </div>
                <div className="content">
                    {this.renderOneRelatedPost()}
                </div>
            </div>
        );
    }

    private renderOneRelatedPost(): JSX.Element[] {
        return this.props.relatedPosts.map((post: IPost, index: number) => {
            return (
                <div className="block" key={index} onClick={() => this.redirect(post.url)} >
                    <a href={Global.hostFront + "/" + post.url} onClick={(e) => e.preventDefault()}>
                        <div className="leftSide">
                            <Image className="coverImage"
                                src={Global.host + post.coverImage.formats.thumbnail.url}
                                alt={post.coverImage.alternativeText}
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className="rightSide">
                            {post.title}
                        </div>
                    </a>
                </div>
            )
        })
    }

    private redirect(URL: string): void {
		const postLink: string = "/" + URL;
		this.props.navigateWrapped(postLink);
	}
}

export default withRouter(RelatedPosts);