import { Component } from "react";
import { IPost } from "@/definitions/definitions"; // TODO esto habra que mejorarlo
import Utils from "@/utils/utils";
import { JSDOM } from "jsdom";

export type HeadingType = { id: string; text: string; level: number };

interface IReadIndexState {
	activeHeading: string;
}

class ReadIndex extends Component<IPost, IReadIndexState> {

	private observer: IntersectionObserver | null = null;

	constructor(props: IPost) {
		super(props);

		this.state = {
			activeHeading: ''
		};
	}


	public componentDidMount(): void {
		this.setupObserver();
	}

	public componentDidUpdate(prevProps: Readonly<IPost>, prevState: Readonly<IReadIndexState>, snapshot?: any): void {
		if (prevProps.id !== this.props.id) {
			this.setupObserver();
		}
	}

	public componentWillUnmount() {
		if (this.observer) {
			this.observer.disconnect();
		}
	}

	public render() {
		if (Utils.isObjectEmpty(this.props)) return "";

		const headings = this.construct();
		let countH1: number = 1;

		return (
			<div className="readIndex">
				<div className="title">
					Tabla de Contenidos
				</div>
				<div className="navWrapper">
					<nav>
						<ul>
							{headings.map((heading: HeadingType, index: number) => (
								<li className={this.state.activeHeading === heading.id ? 'active' : ''} key={index} style={{ marginLeft: `${heading.level - 2}em` }} onClick={() => this.scrollMediaPost(heading.id)}>
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
			</div>
		);
	}

	private construct(): HeadingType[] {
		const { document } = new JSDOM('<!DOCTYPE html>').window;
		const element = document.createElement('div');

		element.innerHTML = this.props.content;

		const headings = Array.from(element.querySelectorAll("h2, h3"))
			.map((element) => ({
				id: element.textContent ? Utils.idGeneratorFromString(element.textContent) : "",
				text: element.textContent ?? "",
				level: Number(element.tagName.substring(1))
			}));

		return headings;
	}

	private scrollMediaPost(id: string): void {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	}

	private setupObserver(): void {
		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						this.setState({ activeHeading: entry.target.id });
					}
				});
			},
			{
				rootMargin: '0% 0% -80% 0%',
				threshold: 0
			}
		);

		const headings = document.querySelectorAll('h2, h3');

		headings.forEach((heading: Element) => {
			this.observer?.observe(heading);
		});
	}
}

export default ReadIndex;