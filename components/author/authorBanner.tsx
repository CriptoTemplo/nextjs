import { IAuthor, IMedia } from "@/definitions/definitions";
import * as React from 'react';
import styles from "@/styles/authorBanner.module.scss";
import Image from 'next/image';
import Global from "@/definitions/global";
import SocialNetworks from "@/components/author/socialNetworks";

export interface IBannerProps {
}

export interface IBannerState {
}

export default class AuthorBanner extends React.Component<IAuthor, IBannerState> {
    constructor(props: IAuthor) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const author: IAuthor = this.props;
        const image: IMedia = author.profilePic;
        return (
            <div className={styles.authorBanner}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.coverImage}
                        src={Global.host + image.formats.small.url}
                        alt={image.alternativeText}
                        width={300}
                        height={300}
                    />
                </div>
                <div className={styles.rightSide}>
                    <h1 className={styles.h1}>{author.name}</h1>
                    <q className={styles.quote}>{author.quote}</q>
                    <div className={styles.socialWrapper}>
                        <SocialNetworks {...author.socialNetworks} />
                    </div>
                </div>
            </div>
        );
    }
}
