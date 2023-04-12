import { IMetaTags } from "@/utils/helmet";
import * as React from 'react';
import Image from 'next/image';
import styles from "@/styles/socialNetworks.module.scss";
import telegramLogo from '@/public/highlights-telegram.svg'
import twitterLogo from '@/public/highlights-twitter.svg'
import mailLogo from '@/public/highlights-mail.svg'
import enlaceLogo from '@/public/highlights-enlace.svg'
import facebookLogo from '@/public/highlights-facebook.svg'
import linkedinLogo from '@/public/highlights-linkedin.svg'
import pinterestLogo from '@/public/highlights-pinterest.svg'
import redditLogo from '@/public/highlights-reddit.svg'
import whatsappLogo from '@/public/highlights-whatsapp.svg'
import CarouselButtons, { ICarouselButtonsProps } from "./carouselButtons";
import GlobalCache from "@/definitions/cache";

export interface ISocialShareProps {
    metaTags: IMetaTags;
    url: string;
}

export interface ISocialShareState {
}

export default class SocialShare extends React.Component<ISocialShareProps, ISocialShareState> {
    constructor(props: ISocialShareProps) {
        super(props);

        this.state = {
        }
    }

    public render() {

        return (
            <div className="shareButtons">
                <CarouselButtons {...this.getCarouselProps()} />
            </div>
        );
    }

    // TODO definir orden
    private renderAllElements(): JSX.Element[] {
        const metaTags: IMetaTags = this.props.metaTags;
        const url: string = this.props.url;
        const encodedUrl = encodeURIComponent(url);
        const encodedText = encodeURIComponent(metaTags.title);

        const twitterHref: string = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
        const facebookHref: string = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        const whatsappHref: string = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
        const telegramHref: string = `https://telegram.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        const linkedinHref: string = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        const redditHref: string = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`;
        const emailHref: string = `mailto:?subject=${encodedText}&body=${encodedUrl}`;
        const pinterestHref: string = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`;

        let elements: JSX.Element [] = [];
        elements.push(this.renderCopyUrl(enlaceLogo, "Copiar el Enlace"));
        elements.push(this.renderImageElement(twitterHref, twitterLogo, "Compartir en Twitter"));
        elements.push(this.renderImageElement(facebookHref, facebookLogo, "Compartir en Facebook"));
        elements.push(this.renderImageElement(whatsappHref, whatsappLogo, "Compartir en WhatsApp"));
        elements.push(this.renderImageElement(telegramHref, telegramLogo, "Compartir en Telegram"));
        elements.push(this.renderImageElement(linkedinHref, linkedinLogo, "Compartir en LinkedIn"));
        elements.push(this.renderImageElement(redditHref, redditLogo, "Compartir en Reddit"));
        elements.push(this.renderImageElement(pinterestHref, pinterestLogo, "Compartir en Pinterest"));
        elements.push(this.renderImageElement(emailHref, mailLogo, "Compartir por Correo Electrónico"));

        return elements;
    }

    private getCarouselProps(): ICarouselButtonsProps {
        return {
            elements: this.renderAllElements(),
            hideButtons: true,
            positionChangesOnTick: 4
        }
    }

    private copyToClipboard = (): void => {
        navigator.clipboard.writeText(this.props.url);
        GlobalCache.toast.current?.showToast("El enlace se ha copiado en el portapapeles", "Informational")
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

    private renderCopyUrl(src: string, alt?: string): JSX.Element {
        return (
            <button onClick={this.copyToClipboard} className={styles.href}>
                <Image className={styles.socialLogo}
                    src={src}
                    alt={alt ?? "Copiar el Enlace"}
                    width={48}
                    height={48}
                />
            </button>
        )
    }
}