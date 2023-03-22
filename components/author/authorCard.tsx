import { IAuthor, IMedia } from "@/definitions/definitions";
import * as React from 'react';
import styles from "@/styles/authorBanner.module.scss";
import Image from 'next/image';
import Global from "@/definitions/global";
import Link from "next/link";

export interface IAuthorCardProps {
}

export interface IAuthorCardState {
}

export default class AuthorCard extends React.Component<IAuthor, IAuthorCardState> {
    constructor(props: IAuthor) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const author: IAuthor = this.props;
        const image: IMedia = author.profilePic;
        return (
            <div className={styles.authorCard}>
                <Link href={Global.hostFront + "/nuestro-equipo/" + author.URL}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.coverImage}
                        src={Global.host + image.formats.small.url}
                        alt={image.alternativeText}
                        width={300}
                        height={300}
                    />
                </div>
                <h3>{author.name}</h3>
                <p>{author.job}</p>
                </Link>
            </div>
        );
    }
}
