import React, { Component } from "react";
import ReadPost from "@/components/mediaPost/readPost";
import ReadIndex from "@/components/mediaPost/readIndex";
import RelatedPosts, { IRelatedPostsProps } from "@/components/mediaPost/relatedPosts";
import { IGuia, IPost } from "@/definitions/definitions";
import SocialShare from "@/components/socialShare";
import MobileTOC, { IMobileTOCProps } from "@/components/mobileTOC";
import { IMetaTags } from "@/utils/helmet";

export interface IPostProps {
    guia: IGuia;
    relationedPosts: IPost[];
}

export interface IPostState {
    isMobile: boolean;
}

export default class Post extends Component<IPostProps, IPostState> {

    constructor(props: IPostProps) {
        super(props);

        this.state = {
            isMobile: false
        }
    }

    public componentDidMount() {
        window.addEventListener("resize", this.handleWindowResize);
        this.handleWindowResize();
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
    }

    private handleWindowResize = (): void => {
        const isMobile: boolean = this.isMobile();
        if (isMobile !== this.state.isMobile) {
            this.setState({
                isMobile: isMobile
            })
        }
    }

    private isMobile = (): boolean => {
        return window.matchMedia('(max-width: 1024px)').matches;
    }

    public render() {
        const isMobile: boolean = this.state.isMobile;
        return (
            <div className="mediaPost">
                {isMobile ? <MobileTOC {...this.getPropsMobileToc()} /> :
                    <div className="leftColumnPost">
                        <div className="stickyWrapper">
                            <ReadIndex {...this.getPropsReadIndex()} />
                            {/*<SocialShare {...this.getPropsReadIndex()} />*/}
                        </div>
                    </div>
                }
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

    private getPropsMobileToc(): IMobileTOCProps {
        return {
            post: this.props.guia.Post,
            metaTags: this.props.guia.MetaTags
        };
    }
}
