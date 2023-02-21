import * as React from 'react';
import Dropdown, { IDropdownOptions, IDropdownProps } from "../../components/dropdown/dropdown";
import { IHeaderDropdown, TDropwdown, TStringDuple, TStringTriple } from "../../definitions/global";
import { IHeaderProps } from "./headerWrapper";
import DropdownMobile from "../../components/dropdownMobile/dropdownMobile";

export interface IHeaderMobileState {
}

// TODO Hacer una clase abstracta padre que contenga los dos headers
export default class HeaderMobile extends React.Component<IHeaderProps, IHeaderMobileState> {
	constructor(props: IHeaderProps) {
		super(props);

		this.state = {
		}
	}

	public render() {
		return (
			<div id="headerMobile" className="headerMobile">
				<div className="headerMobileWrapper">
					<div className="dropdownContainerMobile">
						{this.renderDropdowns()}
					</div>
				</div>
			</div>
		);
	}

	private renderDropdowns(): JSX.Element[] {
		return this.props.header.Header.map((dropdown: IHeaderDropdown, index: number) => {
			return (<DropdownMobile key={index} {...this.getDropdownProps(dropdown)} />)
		})
	}

	private getDropdownProps(dropdown: IHeaderDropdown): IDropdownProps {
		const dropdownList: IDropdownOptions[] = dropdown.dropdown.map((option: TDropwdown) => {
			return ({
				title: (option[2] ? option[2] : option[0]),
				action: () => this.redirect(option[1]),
				url: option[1]
			})
		});

		return {
			main: { title: (dropdown.main[2] ? dropdown.main[2] : dropdown.main[0]), action: () => this.redirect(dropdown.main[1]), url: dropdown.main[1] },
			actions: dropdownList
		}
	}

	private redirect(route: string): void {
		this.props.redirect(route);
	}
}
