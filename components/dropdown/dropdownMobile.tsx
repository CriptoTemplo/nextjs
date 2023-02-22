import * as React from 'react';
import Global from "../../definitions/global";
import { IDropdownOptions, IDropdownProps } from "./dropdown";

export interface IDropdownState {
	collapsed: boolean;
}

export default class DropdownMobile extends React.Component<IDropdownProps, IDropdownState> {
	constructor(props: IDropdownProps) {
		super(props);

		this.state = {
			collapsed: true
		}
	}

	public render() {
		return (
			<div className="dropdownMobile">
				<div className="dropdownMobilePlaceholder" onClick={(event: React.MouseEvent<HTMLElement>) => this.setVisibility(event)}>
					{this.props.main.title}
					{!this.props.actions.length ? "" : <span className="arrow" />}
				</div>
				<div className="dropdownMobileMenu">
					{this.state.collapsed && this.props.actions.length ? "" :
						this.renderDropdownMenu()
					}
				</div>
			</div>
		);
	}

	private renderDropdownMenu(): JSX.Element[] {
		return this.props.actions.map((option: IDropdownOptions, index: number) => {
			return (
				<div className="dropdownMobileItem" onClick={() => this.onClickOption(option.action)} key={index} >
					<a href={Global.hostFront + option.url} onClick={(e) => e.preventDefault()}>
						{"🔹 " + option.title}
					</a>
				</div>
			)
		})
	}

	private onClickOption(action: () => void): void {
		action();
		document.getElementById("headerButton")?.click();
	}

	private setVisibility(event: React.MouseEvent<HTMLElement>): void {
		// event.currentTarget.parentElement?.toggleAttribute("collapsed");
		event.currentTarget.parentElement?.classList.toggle("active");
		const aux: boolean = this.state.collapsed;
		this.setState({
			collapsed: !aux
		})
	}
}
