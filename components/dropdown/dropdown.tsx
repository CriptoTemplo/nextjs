import * as React from 'react';
import Global from "../../definitions/global";
import styles from "../../styles/dropdown.module.scss";
export interface IDropdownOptions {
	title: string;
	action: () => void;
	url: string;
}

export interface IDropdownProps {
	main: IDropdownOptions;
	actions: IDropdownOptions[];
}

export interface IDropdownState {
}

export default class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
	constructor(props: IDropdownProps) {
		super(props);

		this.state = {
		}
	}

	public render() {
		return (
			<div className={styles.dropdown}>
				<div className={styles.dropdownPlaceholder} onClick={this.props.main.action}>
					<a href={Global.hostFront + this.props.main.url} onClick={(e) => e.preventDefault()}>
						{this.props.main.title}
					</a>
				</div>
				{!this.props.actions.length ? "" :
					<div className={styles.dropdownMenu}>
						{this.renderDropdownMenu()}
					</div>
				}
			</div>
		);
	}

	private renderDropdownMenu(): JSX.Element[] {
		return this.props.actions.map((option: IDropdownOptions, index: number) => {
			return (
				<div className={styles.dropdownItem} onClick={option.action} key={index} >
					<a href={Global.hostFront + option.url} onClick={(e) => e.preventDefault()}>
						{option.title}
					</a>
				</div>
			)
		})
	}
}
