import { IMetaTags } from "@/utils/helmet";
import * as React from 'react';
import Image from 'next/image';
import styles from "@/styles/socialNetworks.module.scss";
import youtubeLogo from '@/public/highlights-youtube.svg'
import telegramLogo from '@/public/highlights-telegram.svg'
import twitterLogo from '@/public/highlights-twitter.svg'
//import tiktokLogo from '../../public/highlights-tiktok.svg'
import mailLogo from '@/public/highlights-mail.svg'
import instagramLogo from '@/public/highlights-instagram.svg'
import CarouselButtons, { ICarouselButtonsProps } from "./carouselButtons";

export interface ISocialShareProps {
    metaTags: IMetaTags;
    url: string;
}

export interface ISocialShareState {
    copySuccess: string;
}

export default class SocialShare extends React.Component<ISocialShareProps, ISocialShareState> {
    constructor(props: ISocialShareProps) {
        super(props);

        this.state = {
            copySuccess: ""
        }
    }

    public render() {

        return (
            <div className="shareButtons">

                <CarouselButtons {...this.getCarouselProps()} />
            </div>
        );
    }

    // TODO meter el copiar url y definir orden
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
        elements.push(this.renderImageElement(twitterHref, twitterLogo, "Compartir en Twitter"));
        elements.push(this.renderImageElement(facebookHref, twitterLogo, "Compartir en Facebook"));
        elements.push(this.renderImageElement(whatsappHref, twitterLogo, "Compartir en WhatsApp"));
        elements.push(this.renderImageElement(telegramHref, telegramLogo, "Compartir en Telegram"));
        elements.push(this.renderImageElement(linkedinHref, telegramLogo, "Compartir en LinkedIn"));
        elements.push(this.renderImageElement(redditHref, telegramLogo, "Compartir en Reddit"));
        elements.push(this.renderImageElement(emailHref, mailLogo, "Compartir por Correo Electrónico"));
        elements.push(this.renderImageElement(pinterestHref, telegramLogo, "Compartir en Pinterest"));

        return elements;
    }

    private getCarouselProps(): ICarouselButtonsProps {
        return {
            elements: this.renderAllElements(),
            hideButtons: true
        }
    }

    private copyToClipboard = (): void => {
        navigator.clipboard.writeText(this.props.url);
        this.setState({copySuccess: 'Copied to clipboard!' });
        setTimeout(() => this.setState({copySuccess: '' }), 2000);    
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

/*
                <button onClick={this.copyToClipboard}>Copiar URL</button>
                {this.state.copySuccess && <span>{this.state.copySuccess}</span>}

{this.renderImageElement(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`, twitterLogo, "Compartir en Twitter")}
<a
    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
    target="_blank"
    rel="noopener noreferrer nofollow"
>
    Share on Twitter
</a>

{this.renderImageElement(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, twitterLogo, "Compartir en Facebook")}
<a
    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
    target="_blank"
    rel="noopener noreferrer nofollow"
>
    Share on Facebook
</a>

{this.renderImageElement(`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`, twitterLogo, "Compartir en WhatsApp")}
<a
    href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
    target="_blank"
    rel="noopener noreferrer nofollow"
>
    Share on WhatsApp
</a>

{this.renderImageElement(`https://telegram.me/share/url?url=${encodedUrl}&text=${encodedText}`, telegramLogo, "Compartir en Telegram")}
<a
    href={`https://telegram.me/share/url?url=${encodedUrl}&text=${encodedText}`}
    target="_blank"
    rel="noopener noreferrer nofollow"
>
    Share on Telegram
</a>

{this.renderImageElement(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, telegramLogo, "Compartir en LinkedIn")}
<a
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
    target="_blank"
    rel="noopener noreferrer nofollow"
>
    Share on LinkedIn
</a>

{this.renderImageElement(`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`, telegramLogo, "Compartir en Reddit")}
<a
    href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`}
    target="_blank"
    rel="noopener noreferrer nofollow"
>
    Share on Reddit
</a>

{this.renderImageElement(`mailto:?subject=${encodedText}&body=${encodedUrl}`, telegramLogo, "Compartir por Correo Electrónico")}
<a
    href={`mailto:?subject=${encodedText}&body=${encodedUrl}`}
    target="_blank"
    rel="noopener noreferrer nofollow"
>
    Share via Email
</a>

{this.renderImageElement(`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`, telegramLogo, "Compartir en Pinterest")}
<a
    href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`}
    target="_blank"
    rel="noopener noreferrer nofollow"
>
    Share on Pinterest
</a>
*/