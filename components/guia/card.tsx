import { IGuia, IPost } from "@/definitions/definitions";
import * as React from 'react';
import Image from 'next/image';
import Link from "next/link";
import Global from "@/definitions/global";
import Utils from "@/utils/utils";
import styles from "@/styles/card.module.scss";

export interface IGuiaCardProps {
}

export interface IGuiaCardState {
}

export default class GuiaCard extends React.Component<IGuia, IGuiaCardState> {
    constructor(props: IGuia) {
        super(props);

        this.state = {
        }
    }

    public render() {
		const guia: IGuia = this.props;
        const post: IPost = this.props.Post;
        const imageSrc: string = post.coverImage.formats.small ? post.coverImage.formats.small.url : post.coverImage.formats.thumbnail.url;
        return (
			<div className={styles.card}>
				<Link href={Global.hostFront + "/guias/" + guia.URL}>
					<div className={styles.imageWrapper}>
						<Image className={styles.coverImage}
							src={Global.host + imageSrc}
							alt={post.coverImage.alternativeText}
							width={300}
							height={300}
						/>
					</div>
					<div className={styles.content}>
						<h3 className={styles.cardTitle}>
							{post.title}
						</h3>
						<div className={styles.extraInfo}>
							<div className={styles.difficulty}>
								<span>
									{post.difficulty}
								</span>
							</div>
							<div className={styles.publishedDate}>
								{Utils.formatDateDayShortMonthYear(guia.updatedAt)}
							</div>
							<div className={styles.readTime}>
								<i className={styles.icon} />
								<span> {post.readTime + "min."} </span>
							</div>
						</div>
					</div>
				</Link>
			</div>
        );
    }
}
