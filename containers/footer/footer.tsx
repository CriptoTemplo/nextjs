import * as React from 'react';
import Global from "../../definitions/global";
import Image from 'next/image'
import youtubeLogo from '../../public/highlights-youtube.svg'
import telegramLogo from '../../public/highlights-telegram.svg'
import twitterLogo from '../../public/highlights-twitter.svg'
import tiktokLogo from '../../public/highlights-tiktok.svg'
import mailLogo from '../../public/highlights-mail.svg'
import instagramLogo from '../../public/highlights-instagram.svg'
import Link from "next/link";

export interface IFooterProps {
}

export interface IFooterState {
}

export default class Footer extends React.Component<IFooterProps, IFooterState> {
	constructor(props: IFooterProps) {
		super(props);

		this.state = {
		}
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
					/>
				</div>
				<div className="socialLogo">
					<Image className="coverImage"
						src={telegramLogo}
						alt="Link para ir al canal de Telegram de Empezar a Invertir"
					/>
				</div>
				<div className="socialLogo">
					<Image className="coverImage"
						src={twitterLogo}
						alt="Link para ir al Twitter de Empezar a Invertir"
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
					/>

				</div>
				<div className="socialLogo">
					<Image className="coverImage"
						src={mailLogo}
						alt="Link para ir enviar un e-mail a Empezar a Invertir"
					/>
				</div>
			</>
		);
	}

	private footerTextLinks(): JSX.Element {
		return (
			<>
				<div className="imgLogo">
					<Image className="coverImage" src={Global.host + "/uploads/thumbnail_logo_fe6e7fe36f.png" }
						alt="Logo en grande de Empezar a Invertir"
						width={300}
						height={300}
						/>
				</div>
				<div className="footerLinks">
					<span className="title">Cursos</span>
					<span className="link">Trading</span>
					<span className="link">Bolsa</span>
					<span className="link">Criptomonedas</span>
					<span className="link">Grupo inversion</span>
				</div>
				<div className="footerLinks">
					<span className="title">Cursos</span>
					<span className="link">Trading</span>
					<span className="link">Bolsa</span>
					<span className="link">Criptomonedas</span>
					<span className="link">Grupo inversion</span>
				</div>
				<div className="footerLinks">
					<span className="title">Cursos</span>
					<span className="link">Trading</span>
					<span className="link">Bolsa</span>
					<span className="link">Criptomonedas</span>
					<span className="link">Grupo inversion</span>
				</div>
				<div className="footerLinks">
					<Link href="/sitemap" className="title">Sitemap</Link>
				</div>
			</>
		);
	}
}
