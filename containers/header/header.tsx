import * as React from 'react';
import Dropdown, { IDropdownOptions, IDropdownProps } from "../../components/dropdown/dropdown";
import SearchBar from "../../components/header/searchBar";
import Global, { IHeaderDropdown, TDropwdown } from "../../definitions/global";
import { IHeaderProps } from "./headerWrapper";
import Image from 'next/image';
import logo_thumbnail from '@/public/logo_thumbnail.webp';


export interface IHeaderState {
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
	constructor(props: IHeaderProps) {
		super(props);

		this.state = {

		}
	}

	public render() {
		return (
			<div className="header">
				<div className="wrapperHeader">
					<div className="homeButton" onClick={() => this.redirectHome()}>
						<a href={Global.hostFront} onClick={(e) => e.preventDefault()}>
							<div className="imgLogo">
								<Image className="coverImage" src={logo_thumbnail}
									alt="Toca para volver al incio"
									width={150}
									height={150} />
							</div>
							<span className="nameLogo">
								Empezar a Invertir
							</span>
						</a>
					</div>
					<div className="dropdownContainer">
						{this.renderDropdowns()}
					</div>
					<SearchBar />
					{this.renderSVG()}
					{this.renderMenuButton()}
				</div>
			</div>
		);
	}

	private redirectHome(): void {
		this.redirect("/");
		if (document.getElementById("headerButton")?.className.includes("active")) {
			document.getElementById("headerButton")?.click();
		}
	}

	private renderDropdowns(): JSX.Element[] {
		return this.props.header.Header.map((dropdown: IHeaderDropdown, index: number) => {
			return (<Dropdown key={index} {...this.getDropdownProps(dropdown)} />)
		})
	}

	private getDropdownProps(dropdown: IHeaderDropdown): IDropdownProps {
		const dropdownList: IDropdownOptions[] = dropdown.dropdown.map((option: TDropwdown) => {
			return ({
				title: option[0],
				action: () => this.redirect(option[1]),
				url: option[1]
			})
		});

		return {
			main: { title: dropdown.main[0], action: () => this.redirect(dropdown.main[1]), url: dropdown.main[1] },
			actions: dropdownList
		}
	}

	private redirect(route: string): void {
		this.props.redirect(route);
	}

	private setVisibilityHeaderMobile(): void {
		const headerMobile: HTMLElement | null = document.getElementById("headerMobile");
		if (headerMobile) {
			headerMobile.classList.toggle("active");
			document.body.classList.toggle("no-scroll");

			const visibility: string = headerMobile.style.visibility;
			if (visibility === "visible") {
				headerMobile.style.visibility = "hidden";
			}
			else {
				headerMobile.style.visibility = "visible";
			}
		}
	}

	private renderSVG(): JSX.Element {
		return (
			<svg>
				<defs>
					<filter id="gooeyness">
						<feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
						<feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
					</filter>
				</defs>
			</svg>
		);
	}

	private renderMenuButton(): JSX.Element {
		return (
			<div className="plate plate2" id="headerButton" onClick={(e: any) => { e.currentTarget.classList.toggle('active'); this.setVisibilityHeaderMobile() }}>
				<svg className="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
					<path className="line line1" d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475" />
					<path className="line line2" d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034" />
					<path className="line line3" d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254" />
					<path className="line line4" d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525" />
					<path className="line line5" d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441" />
					<path className="line line6" d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695" />
				</svg>
				<svg className="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
					<path className="line" d="M 34,32 L 66,68" />
					<path className="line" d="M 66,32 L 34,68" />
				</svg>
			</div>
		);
	}
}
