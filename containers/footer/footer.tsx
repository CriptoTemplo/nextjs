import * as React from 'react';
import Global from "../../definitions/global";
import '../../styles/footer.module.scss';
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
					<img className="coverImage"
						src={"/highlights-youtube.svg"}
						alt="Link para ir al canal de Youtube de Empezar a Invertir"
					/>
				</div>
				<div className="socialLogo">
					<img className="coverImage"
						src={"/highlights-telegram.svg"}
						alt="Link para ir al canal de Telegram de Empezar a Invertir"
					/>
				</div>
				<div className="socialLogo">
					<img className="coverImage"
						src={"/highlights-twitter.svg"}
						alt="Link para ir al Twitter de Empezar a Invertir"
					/>
				</div>
				<div className="socialLogo">
					<img className="coverImage"
						src={"/highlights-instagram.svg"}
						alt="Link para ir al Instagram de Empezar a Invertir"
					/>
				</div>
				<div className="socialLogo">
					<img className="coverImage"
						src={"/highlights-tiktok.svg"}
						alt="Link para ir al canal de TikTok de Empezar a Invertir"
					/>

				</div>
				<div className="socialLogo">
					<img className="coverImage"
						src={"/highlights-mail.svg"}
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
					<img className="coverImage" src={Global.host + "/uploads/thumbnail_logo_fe6e7fe36f.png" }
						alt="Logo en grande de Empezar a Invertir"
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
					<a href="/sitemap" className="title">Sitemap</a>
				</div>
			</>
		);
	}
}
