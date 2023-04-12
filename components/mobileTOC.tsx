import * as React from 'react';
import shareIcon from '@/public/share_icon.svg'
import Image from 'next/image'
import { IPost } from "@/definitions/definitions";
import Utils from "@/utils/utils";
import { JSDOM } from "jsdom";
import { HeadingType } from "@/components/mediaPost/readIndex";
import { IMetaTags } from "@/utils/helmet";

export interface IMobileTOCProps {
    post: IPost,
    metaTags: IMetaTags,
    url: string;
}

export interface IMobileTOCState {
    isCollapsed: boolean;
    activeHeading: string;
}

export default class MobileTOC extends React.Component<IMobileTOCProps, IMobileTOCState> {

    private element: React.RefObject<HTMLDivElement> = React.createRef();
    private active: boolean = false;
    private observer: IntersectionObserver | null = null;

    constructor(props: IMobileTOCProps) {
        super(props);

        this.state = {
            isCollapsed: true,
            activeHeading: ''
        }
    }

    public componentDidMount(): void {
        this.initScrollEvent();
        this.setupObserver();
    }

    public componentDidUpdate(prevProps: Readonly<IMobileTOCProps>, prevState: Readonly<IMobileTOCState>, snapshot?: any): void {
        if (prevProps.post.id !== this.props.post.id) {
            this.setupObserver();
        }
    }

    public componentWillUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }


    public render() {
        return (
            <div className="mobileTOC" ref={this.element}>
                <div className="toc">
                    {this.renderDropdownTOC()}
                </div>
                <div className="share" onClick={this.share}>
                    <Image className="coverImage"
                        src={shareIcon}
                        alt="Botón para compartir este artículo"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        );
    }

    private renderDropdownTOC(): JSX.Element {
        const content: string = this.props.post.content;
        const headings: HeadingType[] = this.construct(content);
        const navHeading: JSX.Element = this.renderNavHeadings(headings);
        const collapsed: boolean = this.state.isCollapsed;
        return (
            <div className="dropdownMobile" id="mobileTOC">
                <div className="dropdownMobilePlaceholder" id="mobileTOCPlaceholder" onClick={(event: React.MouseEvent<HTMLElement>) => this.setVisibility(event)}>
                    <span className="text">TABLA DE CONTENIDOS</span>
                    <span className="arrow" />
                </div>
                <div className="dropdownMobileMenu">
                    {collapsed ? "" : navHeading}
                </div>
            </div>
        )
    }

    private renderNavHeadings(headings: HeadingType[]): JSX.Element {
        let countH1: number = 1;
        return (
            <nav>
                <ul>
                    {headings.map((heading: HeadingType, index: number) => (
                        <li key={index} className={this.state.activeHeading === heading.id ? 'active' : ''} style={{ marginLeft: `${heading.level - 2}em` }} onClick={() => this.scrollMediaPost(heading.id)}>
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
        )
    }

    private setVisibility(event: React.MouseEvent<HTMLElement>): void {
        event.currentTarget.parentElement?.classList.toggle("active");
        const aux: boolean = this.state.isCollapsed;
        this.setState({
            isCollapsed: !aux
        })
    }

    private construct(content: string): HeadingType[] {
        const { document } = new JSDOM('<!DOCTYPE html>').window;
        const element = document.createElement('div');

        element.innerHTML = content;

        const headings = Array.from(element.querySelectorAll("h2, h3"))
            .map((element) => ({
                id: element.textContent ? Utils.idGeneratorFromString(element.textContent) : "",
                text: element.textContent ?? "",
                level: Number(element.tagName.substring(1))
            }));

        return headings;
    }

    private initScrollEvent(): void {
        document.addEventListener("scroll", () => this.checkScrollPosition()); // NO HACE FALTA DESTRUIRLO PORQUE SIEMPRE ESTA ACTIVO
    }

    private toggleButton(): void {
        if (this.element && this.element.current && this.element.current.classList) (this.element.current as HTMLDivElement).classList.toggle("show");
    }

    // 200 = Numero de pixeles desde el top del document
    private checkScrollPosition(): void {
        const scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
        if (!this.active && scrollTop > 200) {
            this.active = true;
            return this.toggleButton();
        }
        if (this.active && scrollTop < 200) {
            this.active = false;
            return this.toggleButton();
        }
    }

    private scrollMediaPost(id: string): void {
        document.getElementById("mobileTOCPlaceholder")?.click();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }

    private share = (): void => {
        if (navigator.share) {
            navigator.share({
                title: this.props.metaTags.title,
                text: this.props.metaTags.description,
                url: this.props.url
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        }
    }

    private setupObserver(): void {
        const headings = document.querySelectorAll('h2, h3');

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.setState({ activeHeading: entry.target.id });
                        this.updateProgressBar(headings, entry.target.id);
                    }
                });
            },
            {
                rootMargin: '0% 0% -80% 0%',
                threshold: 0
            }
        );

        headings.forEach((heading: Element) => {
            this.observer?.observe(heading);
        });
    }

    private updateProgressBar(headings: NodeListOf<Element>, activeHeadingId: string): void {
        let completedHeadings: number = 0;

        if (headings) {
            headings.forEach((heading: Element, index: number) => {
                if (heading.id === activeHeadingId) {
                    completedHeadings = index;
                    return;
                }
            })

            const progressPercentage: number = ((completedHeadings + 1) / headings.length) * 100;

            // Update the mobileTOC background-image
            if (this.element.current) {
                this.element.current.style.backgroundImage = `linear-gradient(to right, rgb(255, 187, 1) ${progressPercentage}%,
                transparent ${progressPercentage + 0.01}%)`;
            }
        }
	}
}
