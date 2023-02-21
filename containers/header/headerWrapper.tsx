import * as React from 'react';
import { IHeader } from "../../definitions/global";
import GlobalStore from "../../Stores/GlobalStore";
import withRouter, { WithRouter } from "../../utils/withRouter";
import Header from "./header";
import HeaderMobile from "./headerMobile";
import Utils from "../../utils/utils";

export interface IHeaderWrapperProps {
}

export interface IHeaderWrapperState {
	header: IHeader;
}

export interface IHeaderProps {
	header: IHeader;
	redirect: (route: string) => void;
}

type IHeaderWrapperType = IHeaderWrapperProps & WithRouter;

class HeaderWrapper extends React.Component<IHeaderWrapperType, IHeaderWrapperState> {
	constructor(props: IHeaderWrapperType) {
		super(props);

		this.state = {
			header: {} as IHeader
		}
	}

	public async componentDidMount() {
		this.getHeaderInfo();
	}

	public render() {
		if (Utils.isObjectEmpty(this.state.header)) return "";

		return (
			<>
				<Header {...this.getHeaderProps()} />
				<HeaderMobile {...this.getHeaderProps()} />
			</>
		);
	}

	private async getHeaderInfo(): Promise<void> {
		const header: IHeader = await GlobalStore.getHeader();
		this.setState({
			header
		})
	}

	private redirect = (route: string): void => {
		this.props.navigateWrapped(route);
	}

	private getHeaderProps(): IHeaderProps {
		return {
			header: this.state.header,
			redirect: this.redirect
		}
	}
}

export default withRouter(HeaderWrapper);
