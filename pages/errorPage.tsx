import * as React from 'react';
import withRouter, { WithRouter } from "../utils/withRouter";

export interface IErrorPageProps {
}

export interface IErrorPageState {
}

type IErrorPageType = IErrorPageProps & WithRouter;

class ErrorPage extends React.Component<IErrorPageType, IErrorPageState> {
	constructor(props: IErrorPageType) {
		super(props);

		this.state = {
		}

	}
	
	//TODO ponemos 1ms porque sino no redirecciona al entrar desde google a una url que no tiene nada
	public componentDidMount() {
		setTimeout(() => this.props.navigateWrapped("/"), 1);
	}

	public render() {
		return "";
		return (
			<div>
				404! Parece que te has perdido...
			</div>
		);
	}
}

export default withRouter(ErrorPage);
