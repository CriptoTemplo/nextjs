import React, { Component } from "react";
import ReadPost from "@/components/mediaPost/readPost";
import ReadIndex from "@/components/mediaPost/readIndex";
import RelatedPosts, { IRelatedPostsProps } from "@/components/mediaPost/relatedPosts";
import { IPost } from "@/definitions/definitions";

export interface IPostProps {
    post: IPost;
	relationedPosts: IPost[];
}

export interface IPostState {
}

export default class Post extends Component <IPostProps, IPostState> {

    constructor(props: IPostProps) {
		super(props);

		this.state = {
		}
	}

    /*
    public shouldComponentUpdate(nextProps: Readonly<IPostProps>, nextState: Readonly<IPostState>, nextContext: any): boolean {
		if (nextProps.post.content === this.props.post?.content) return false;

		return true;
	}*/

    public render () {
        return (
            <div className="mediaPost">
                <div className="leftColumnPost">
                    <div className="stickyWrapper">
                        <ReadIndex {...this.getPropsReadIndex()}/>
                    </div>
                </div>
                <div className="midColumnPost">
                    <ReadPost {...this.getPropsReadPost()}/>
                </div>
                <div className="rightColumnPost">
                    <div className="stickyWrapper">
                        <RelatedPosts {...this.getPropsRelatedPosts()} />
                    </div>
                </div>
            </div>
        );

    }

    private getPropsReadIndex (): IPost {
        return this.props.post;
    }

    private getPropsReadPost (): IPost {
        return this.props.post;
    }

    private getPropsRelatedPosts (): IRelatedPostsProps {
        return {
            relatedPosts: this.props.relationedPosts
        };
    }
}
