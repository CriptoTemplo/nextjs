import Article from "@/components/article";
import AuthorBanner from "@/components/author/authorBanner";
import { IAuthor } from "@/definitions/definitions";
import styles from "@/styles/author.module.scss";
import * as React from 'react';

export interface IAuthorProps {
}

export interface IAuthorState {
}

export default class Author extends React.Component<IAuthor, IAuthorState> {
    constructor(props: IAuthor) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className={styles.authorWrapper}>
                <AuthorBanner {...this.props} />
                <Article content={this.props.biography} />
                <div className={styles.lowWrapper} >
                    <Article content={this.props.education} />
                    <Article content={this.props.specialty} />
                    <Article content={this.props.abilities} />
                </div>
            </div>
        );
    }
}
