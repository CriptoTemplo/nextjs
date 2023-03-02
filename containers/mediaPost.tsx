import React, { Component } from 'react';
import Auxiliar from "@/components/cryptoData/readPost copy";
import { IPost } from '@/definitions/definitions';

export interface IMediaPostProps {
    post: IPost;
}

export interface IMediaPostState {
}

class MediaPost extends Component <IMediaPostProps, IMediaPostState> {

    constructor(props: IMediaPostProps) {
		super(props);

		this.state = {
		}
	}

    /*
    public shouldComponentUpdate(nextProps: Readonly<IMediaPostProps>, nextState: Readonly<IMediaPostState>, nextContext: any): boolean {
		if (nextProps.post.Post.content === this.props.post?.Post.content) return false;

		return true;
	}*/

    public render () {
        return (
            <div className="mediaPost">
                <div className="midColumnPost">
                    <Auxiliar {...this.getPropsReadPost()}/>
                </div>
            </div>
        );

    }

    private getPropsReadPost (): IPost {
        return this.props.post;
    }
}

export default MediaPost;