import React, { Component } from 'react';
import Auxiliar from "@/components/cryptoData/readPost copy";
import { IPost } from '@/definitions/definitions';

export interface IMediaPostState {
}

class MediaPost extends Component <IPost, IMediaPostState> {

    constructor(props: IPost) {
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
        return this.props;
    }
}

export default MediaPost;