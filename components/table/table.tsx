import * as React from 'react';
import { ECryptoFields, IRow, ITable } from "../../definitions/crypto";

export interface ITableProps {
	TableProps: ITable;
}

export interface ITableState {
}

export default class Table extends React.Component<ITableProps, ITableState> {
	constructor(props: ITableProps) {
		super(props);

		this.state = {
		}
	}

	public render() {
		return (
			<div className="wrapperTable">
				<table>
					<thead>
						{this.renderHeaderTable()}
					</thead>
					<tbody>
						{this.renderBodyTable()}
					</tbody>
				</table>
			</div>
		);
	}

	private renderHeaderTable(): JSX.Element {
		return (
			<tr>
				{this.renderHeaderTh()}
			</tr>
		)
	}

	private renderHeaderTh(): JSX.Element[] { // TODO Hacer una clase que sea post
		return this.props.TableProps.headers.map((row: IRow, index: number) => {
			return (
				<th key={index} className={row.field === ECryptoFields.name ? "name" : ""} >
					{row.display}
				</th>
			)
		});
	}

	private renderBodyTable(): JSX.Element[] {
		return this.props.TableProps.rows.map((row: any, index: number) => {
			return (
				<tr key={index}>
					{this.renderBodyTd(row)}
				</tr>
			)
		});
	}

	private renderBodyTd(row: any): JSX.Element { // TODO Hacer una clase que sea post
		return row.map((row: any, index: number) => {
			return (
				<td key={index} >
					{row}
				</td>
			)
		});
	}
}
