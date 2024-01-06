import * as React from 'react';
import Image from 'next/image'
import youtubeLogo from '@/public/highlights-youtube.svg'
import telegramLogo from '@/public/highlights-telegram.svg'
import twitterLogo from '@/public/highlights-twitter.svg'
import tiktokLogo from '@/public/highlights-tiktok.svg'
import mailLogo from '@/public/highlights-mail.svg'
import instagramLogo from '@/public/highlights-instagram.svg'
import logo_thumbnail from '@/public/logo_thumbnail.webp'
import Link from "next/link";
import GlobalStore from "@/stores/GlobalStore";
import { IFooter, IHeaderDropdown, TDropwdown } from "@/definitions/global";

export interface IFooterProps {
}

export interface IFooterState {
	footer: IFooter;
}

export default class Footer extends React.Component<IFooterProps, IFooterState> {
	constructor(props: IFooterProps) {
		super(props);

		this.state = {
			footer: {} as IFooter
		}
	}

	public async componentDidMount() {
		this.getFooterInfo();
	}

	public render() {
		return (
			<div className="footer">
				<div className="upper">
					<div className="wrapperFooter">
						{/*<div className="socialText">
							Estar en Contacto
						</div>
						*/}
						<div className="socialWrapper">
							{this.footerSocialLinks()}
						</div>
					</div>
				</div>
				<div className="lower">
					<div className="wrapperFooter">
						{this.footerTextLinks()}
					</div>
				</div>
			</div>
		);
	}

	private footerSocialLinks(): JSX.Element {
		return (
			<>
				<div className="socialLogo">
					<Image className="coverImage"
						src={youtubeLogo}
						alt="Link para ir al canal de Youtube de Empezar a Invertir"
						width={48}
						height={48}
					/>
				</div>
				<div className="socialLogo">
					<Image className="coverImage"
						src={telegramLogo}
						alt="Link para ir al canal de Telegram de Empezar a Invertir"
						width={48}
						height={48}
					/>
				</div>
				<div className="socialLogo">
					<Image className="coverImage"
						src={twitterLogo}
						alt="Link para ir al Twitter de Empezar a Invertir"
						width={48}
						height={48}
					/>
				</div>
				<div className="socialLogo">
					<Image className="coverImage"
						src={instagramLogo}
						alt="Link para ir al Instagram de Empezar a Invertir"
					/>
				</div>
				<div className="socialLogo">
					<Image className="coverImage"
						src={tiktokLogo}
						alt="Link para ir al canal de TikTok de Empezar a Invertir"
						width={48}
						height={48}
					/>

				</div>
				<div className="socialLogo">
					<Image className="coverImage"
						src={mailLogo}
						alt="Link para ir enviar un e-mail a Empezar a Invertir"
						width={48}
						height={48}
					/>
				</div>
			</>
		);
	}

	private footerTextLinks(): JSX.Element {
		return (
			<>
				<div className="imgLogo">
					<Image className="coverImage" src={logo_thumbnail}
						alt="Logo en grande de Empezar a Invertir"
						width={300}
						height={300}
					/>
				</div>
				{this.renderColumns()}
			</>
		);
	}

	private renderColumns(): JSX.Element[] {
		return this.state.footer?.Footer?.map((column: IHeaderDropdown, index: number) => {
			return (
				<div className="footerLinks" key={index}>
					<span className="title">{column.main[0]}</span>
					{this.renderColumnLinks(column.dropdown)}
				</div>
			)
		})
	}

	private renderColumnLinks(dropdown: [TDropwdown]): JSX.Element[] {
		return dropdown.map((link: TDropwdown, index: number) => {
			return (
				<Link href={link[1]} className="link" key={index}>
					{link[0]}
				</Link>
			)
		})
	}

	private async getFooterInfo(): Promise<void> {
		const footer: IFooter = await GlobalStore.getFooter();
		console.log(footer)
		this.setState({
			footer
		})
	}
}
