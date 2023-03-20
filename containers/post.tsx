import React, { Component } from "react";
import ReadPost from "@/components/mediaPost/readPost";
import ReadIndex from "@/components/mediaPost/readIndex";
import RelatedPosts, { IRelatedPostsProps } from "@/components/mediaPost/relatedPosts";
import { IGuia, IPost } from "@/definitions/definitions";
import SocialShare from "@/components/socialShare";

export interface IPostProps {
    guia: IGuia;
    relationedPosts: IPost[];
}

export interface IPostState {
}

export default class Post extends Component<IPostProps, IPostState> {

    constructor(props: IPostProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className="mediaPost">
                <div className="leftColumnPost">
                    <div className="stickyWrapper">
                        <ReadIndex {...this.getPropsReadIndex()} />
                        {/*<SocialShare {...this.getPropsReadIndex()} />*/}
                    </div>
                </div>
                <div className="midColumnPost">
                    <ReadPost {...this.getPropsReadPost()} />
                </div>
                <div className="rightColumnPost">
                    <RelatedPosts {...this.getPropsRelatedPosts()} />
                </div>
            </div>
        );

    }

    private getPropsReadIndex(): IPost {
        return this.props.guia.Post;
    }

    private getPropsReadPost(): IGuia {
        return this.props.guia;
    }

    private getPropsRelatedPosts(): IRelatedPostsProps {
        return {
            relatedPosts: this.props.relationedPosts
        };
    }
}
