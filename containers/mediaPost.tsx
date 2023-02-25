import React, { Component } from 'react';
import Auxiliar from "../components/cryptoData/readPost copy";
import ReadIndex from '../components/mediaPost/readIndex';
import RelatedPosts, { IRelatedPostsProps } from '../components/mediaPost/relatedPosts';
import { IPost, IMediaPost } from '../definitions/definitions';

export interface IMediaPostProps {
    post: IPost;
	relationedPosts: IMediaPost[];
}

export interface IMediaPostState {
}

class MediaPost extends Component <IMediaPostProps, IMediaPostState> {

    constructor(props: IMediaPostProps) {
		super(props);

		this.state = {
		}
	}

    public shouldComponentUpdate(nextProps: Readonly<IMediaPostProps>, nextState: Readonly<IMediaPostState>, nextContext: any): boolean {
		if (nextProps.post.Post.content === this.props.post?.Post.content) return false;

		return true;
	}

    public render () {
        return (
            <div className="mediaPost">
                <div className="leftColumnPost">
                    <div className="stickyWrapper">
                        <ReadIndex {...this.getPropsReadIndex()}/>
                    </div>
                </div>
                <div className="midColumnPost">
                    <Auxiliar {...this.getPropsReadPost()}/>
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

export default MediaPost;