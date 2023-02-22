import * as React from 'react';
import styles from '../../styles/searchBar.module.scss'

export interface ISearchBarProps {
}

export interface ISearchBarState {
}

export default class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
	constructor(props: ISearchBarProps) {
		super(props);

		this.state = {
		}
	}

	public render() {
		return (
			<div className={styles.searchBar}>
				<input type="text" placeholder="Buscar" />
			</div>
		);
	}
}
