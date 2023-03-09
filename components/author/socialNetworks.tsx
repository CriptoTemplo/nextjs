import { ISocialNetworks } from "@/definitions/definitions";
import * as React from 'react';
import Image from 'next/image';
import styles from "@/styles/socialNetworks.module.scss";
import youtubeLogo from '../../public/highlights-youtube.svg'
import telegramLogo from '../../public/highlights-telegram.svg'
import twitterLogo from '../../public/highlights-twitter.svg'
import tiktokLogo from '../../public/highlights-tiktok.svg'
import mailLogo from '../../public/highlights-mail.svg'
import instagramLogo from '../../public/highlights-instagram.svg'

export interface ISocialNetworksProps {
}

export interface ISocialNetworksState {
}

type TSocialNetwork = "linkedin" | "twitter" | "instagram" | "facebook";

export default class SocialNetworks extends React.Component<ISocialNetworks, ISocialNetworksState> {
    constructor(props: ISocialNetworks) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const linkedin: JSX.Element = this.props.linkedin ? this.renderImageElement(this.props.linkedin, mailLogo) : <></>;
        const twitter: JSX.Element = this.props.twitter ? this.renderImageElement(this.props.twitter, twitterLogo) : <></>;
        const instagram: JSX.Element = this.props.instagram ? this.renderImageElement(this.props.instagram, instagramLogo) : <></>;
        const facebook: JSX.Element = this.props.facebook ? this.renderImageElement(this.props.facebook, youtubeLogo) : <></>;
        return (
            <div className={styles.socialWrapper}>
                {linkedin}
                {twitter}
                {instagram}
                {facebook}
            </div>
        );
    }

    private renderImageElement(href:string, src: string, alt?: string): JSX.Element {
        return ( //TODO Falta meter el <a>
            <a href={href} className={styles.href}>
                <Image className={styles.socialLogo}
                    src={src}
                    alt="Link para ir al canal de TikTok de Empezar a Invertir"
                    width={48}
                    height={48}
                />
            </a>
        )
    }
}
