import { Component } from 'react';
import { IEmpty, IPost } from '../../definitions/mediaPost'; // TODO esto habra que mejorarlo
import Utils from "../../utils/utils";

type HeadingType = { id: string; text: string; level: number };

// TODO se puede hacer que conforme vayas bajando el dom se vaya ilumando en que seccion estas

class ReadIndex extends Component<IPost, IEmpty> {

	public shouldComponentUpdate(nextProps: Readonly<IPost>, nextState: Readonly<IEmpty>, nextContext: any): boolean {
		if (nextProps.id === this.props?.id) return false;

		return true;
	}

	public render() {
        if (Utils.isObjectEmpty(this.props)) return "";

		const headings = this.construct();
		let countH1: number = 1;

		return (
			<div className="readIndex">
				<nav>
					<ul>
						{headings.map((heading: HeadingType) => (
							<li key={heading.id} style={{ marginLeft: `${heading.level - 2}em` }} onClick={() => this.scrollMediaPost(heading.id)}>
								<div>
									<span className="leftSide">
										{(heading.level === 2 ? countH1++ + "." : "")}
									</span>
									<span className="rightSide">
										{heading.text}
									</span>
								</div>
							</li>
						))}
					</ul>
				</nav>
			</div>
		);
	}

	private construct(): HeadingType[] {

		const element:HTMLElement = document.createElement('div');
		element.innerHTML = this.props.Post.content;

		const headings = Array.from(element.querySelectorAll("h2, h3"))
			.map((element) => ({
				id: element.id,
				text: element.textContent ?? "",
				level: Number(element.tagName.substring(1))
			}));

		return headings;
	}

	private scrollMediaPost(id: string): void {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	}
}

export default ReadIndex;