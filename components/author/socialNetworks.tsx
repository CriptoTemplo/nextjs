import { ISocialNetworks } from "@/definitions/definitions";
import * as React from 'react';
import Image from 'next/image';
import styles from "@/styles/socialNetworks.module.scss";
import twitterLogo from '@/public/highlights-twitter.svg'
import instagramLogo from '@/public/highlights-instagram.svg'
import facebookLogo from '@/public/highlights-facebook.svg'
import linkedinLogo from '@/public/highlights-linkedin.svg'
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
        const linkedin: JSX.Element = this.props.linkedin ? this.renderImageElement(this.props.linkedin, linkedinLogo, "Haz click para ver la página de LinkedIn de este autor.") : <></>;
        const twitter: JSX.Element = this.props.twitter ? this.renderImageElement(this.props.twitter, twitterLogo, "Haz click para ver el feed de Twitter de este autor.") : <></>;
        const instagram: JSX.Element = this.props.instagram ? this.renderImageElement(this.props.instagram, instagramLogo, "Haz click para ver la página de Instagram de este autor.") : <></>;
        const facebook: JSX.Element = this.props.facebook ? this.renderImageElement(this.props.facebook, facebookLogo, "Haz click para ver el canal de YouTube de este autor.") : <></>;
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
        return (
            <a href={href} target="_blank" rel="noopener noreferrer nofollow" className={styles.href}>
                <Image className={styles.socialLogo}
                    src={src}
                    alt={alt ?? "Visita la red social de este autor"}
                    width={48}
                    height={48}
                />
            </a>
        )
    }
}
