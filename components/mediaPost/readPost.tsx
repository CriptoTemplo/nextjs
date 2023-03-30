import React, { Component } from "react";
import { IAuthor, IEmpty, IGuia, IPost, IReference } from "@/definitions/definitions"; // TODO esto habra que mejorarlo
import DOMPurify from "isomorphic-dompurify";
import Global from "@/definitions/global";
import Utils from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { JSDOM } from "jsdom";

interface IReadPostState {
    referencesCollapsed: boolean;
}

export default class ReadPost extends Component<IGuia, IReadPostState> {

    public constructor(props: IGuia) {
        super(props);

        this.state = {
            referencesCollapsed: true
        }
    }

    // TODO comprobar si al desmontarse el eventListener se borra o no
    public componentDidMount() {
        const references = Array.from(document.querySelectorAll("span.crossReference"));
        references.map((element: Element) => element.addEventListener("click", this.handleCrossReferenceClick));
    }

    public render() {
        if (Utils.isObjectEmpty(this.props)) return "";
        const guia: IGuia = this.props;
        const rawContent: string = guia.Post.content;
        const elementContent: Element = this.constructFakeElement(rawContent);
        let lowerPost: JSX.Element = this.lowerPost(elementContent);

        const oembedUrl: string[] = this.getIframes(elementContent);

        const editedContent: Element = this.constructContent(elementContent);
        elementContent.innerHTML = DOMPurify.sanitize(elementContent.innerHTML);

        const finalContent: string = this.transformIframes(editedContent, oembedUrl);

        let upperPost: JSX.Element = this.upperPost();
        let midPost: JSX.Element = this.midPost(finalContent);

        return (
            <div className="readPost">
                {upperPost}
                {midPost}
                {lowerPost}
            </div>
        );
    }

    private upperPost(): JSX.Element {
        const guia: IGuia = this.props;
        const post: IPost = guia.Post;
        return (
            <div>
                <h1 className="title">
                    {post.title}
                </h1>
                {this.renderAuthorsWrappers(guia.authors, guia.reviewer)}
                <div className="wrapperImage">
                    <Image className="coverImage"
                        src={Global.host + post.coverImage?.url}
                        alt={post.coverImage.alternativeText}
                        width={500}
                        height={500}
                        priority
                    />
                </div>
                <div className="extraInfo">
                    <span className="updatedDate">
                        {"Actualización: " + this.formatDate(guia.updatedAt)}
                    </span>
                    <div className="dataCenter">
                        <i className="icon" />
                        <span>{guia.views ?? "1"}</span>
                    </div>
                    <span className="readTimeLong">
                        {"Tiempo de lectura: " + post.readTime + "min."}
                    </span>
                </div>
                <hr className="headerSeparator" />
            </div>
        );
    }

    private renderAuthorsWrappers(authors: IAuthor[], reviewer: IAuthor): JSX.Element {
        if (!authors.length || !reviewer) return <></>
        return (
            <div className="authorsWrapper">
                <div className="authors">
                    {authors.map((author: IAuthor, index: number) => {
                        return (
                            <div key={index} className="profilePic">
                                <Image src={Global.host + author.profilePic.url}
                                    alt={"Foto de perfil de " + author.name}
                                    width={50}
                                    height={50}
                                />
                            </div>
                        )
                    })}
                    {this.constructAuthorsString(authors)}
                </div>
                <div className="reviewer">
                    <i className="icon" />
                    <span className="reviewerHref">Revisado por: <Link href={"/nuestro-equipo/" + reviewer.URL}>{reviewer.name}</Link></span>
                    <div className="profilePic">
                        <Image src={Global.host + reviewer.profilePic.url}
                            alt={"Foto de perfil de " + reviewer.name}
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        )
    }

    private constructAuthorsString(authors: IAuthor[]): JSX.Element {
        let aux: string = "Escrito por: ";
        const authorsHrefs: JSX.Element[] = authors.map((author: IAuthor, index: number) => {
            return (
                <React.Fragment key={index}>
                    <Link href={"/nuestro-equipo/" + author.URL}>{author.name}</Link>
                    {index < authors.length - 1 ? <span> y </span> : ""}
                </React.Fragment>
            )
        })
        return (
            <span className="authorsHrefs">{aux}{authorsHrefs}</span>
        )
    }

    private midPost(content: string): JSX.Element {
        return (
            <div>
                {<div dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
        );
    }

    private lowerPost(element: Element): JSX.Element {
        const references: IReference[] = this.constructReferences(element);
        const referencesHTML: JSX.Element[] = references.map((reference: IReference, index: number) => this.referenceHTML(reference, index));
        const collapsed: boolean = this.state.referencesCollapsed;
        return (
            <div className="dropdownMobile bibliography" id="bibliography">
                <div className="dropdownMobilePlaceholder" id="dropdownMobilePlaceholder" onClick={(event: React.MouseEvent<HTMLElement>) => this.setVisibility(event)}>
                    Bibliografía
                    <span className="arrow" />
                </div>
                <div className="dropdownMobileMenu">
                    <span>Empezar a Invertir exige a sus redactores que utilicen fuentes fiables para respaldar los articulos. Entre ellas se incluyen informes oficiales, white papers, entrevistas, articulos académicos y otros datos de expertos en la materia. En caso de que sea necesario, también hacemos referencia a investigaciones originales de otras editoriales de prestigio. Si quieres obtener más información sobre las normas que seguimos para producir los articulos y su contenido puedes consultar nuestra política de editorial.</span>
                    {collapsed ? "" : referencesHTML}
                </div>
            </div>
        )
    }

    private setVisibility(event: React.MouseEvent<HTMLElement>): void {
        event.currentTarget.parentElement?.classList.toggle("active");
        const aux: boolean = this.state.referencesCollapsed;
        this.setState({
            referencesCollapsed: !aux
        })
    }

    private formatDate(date: string): string {
        const auxDate: Date = new Date(date);
        const options: Intl.DateTimeFormatOptions = {
            month: "short"
        }
        let month: string = auxDate.toLocaleDateString("es-ES", options);
        month = month.charAt(0).toUpperCase() + month.slice(1);
        return (auxDate.getDate() + " " + month + "," + " " + auxDate.getFullYear())
    }

    private constructFakeElement(rawContent: string): Element {
        const { document } = new JSDOM('<!DOCTYPE html>').window;
        const element = document.createElement('div');

        element.innerHTML = rawContent;

        return element;
    }

    private constructContent(element: Element): Element {
        element = this.transformImg(element);
        element = this.transformSpan(element);
        element = this.transfromHeadings(element);
        element = this.transfromTables(element);
        element = this.transformLinks(element);

        return element;
    }

    private transformImg(element: Element): Element {
        Array.from(element.querySelectorAll("img")).map((element: Element) => (
            element.outerHTML = `<Image alt="${element.getAttribute("alt") ?? ""}"
                src="${element.getAttribute("src")}"
                width=500 height=500 decoding="async" data-nimg="1"
                class="coverImage" loading="lazy" style="color:transparent" />`
        ));
        return element;
    }

    private transformSpan(element: Element): Element {
        let counter = 1;
        Array.from(element.querySelectorAll("span.editableSpan")).map((element: Element) => (
            element.outerHTML = `<span class="crossReference">[${counter++}]</span>`
        ));
        return element;
    }

    private transfromHeadings(element: Element): Element {
        Array.from(element.querySelectorAll("h2,h3")).map((element: Element) => (
            element.id = element.textContent ? Utils.idGeneratorFromString(element.textContent) : ""
        ));
        return element;
    }

    private transfromTables(element: Element): Element {
        const figureTables = element.querySelectorAll("figure.table");
        const { document } = new JSDOM('<!DOCTYPE html>').window;
        figureTables.forEach((figure: Element) => {
            const wrapperTable = document.createElement('div');
            wrapperTable.classList.add("wrapperTable");

            figure.parentNode?.insertBefore(wrapperTable, figure);
            wrapperTable.appendChild(figure);
        });

        return element;
    }

    private transformLinks(element: Element): Element {
        Array.from(element.querySelectorAll("a")).map((element: Element) => {
            const href: string = element.getAttribute("href") ?? "";
            const isInternal: boolean = href.startsWith(Global.hostFront);
            if (isInternal) return;

            const follow: boolean = element.hasAttribute("follow");
            const sponsored: boolean = element.hasAttribute("sponsored");
            const ugc: boolean = element.hasAttribute("ugc");

            const rel: string = "noopener noreferrer" + (follow ? "" : " nofollow") + (ugc ? " ugc" : "") + (sponsored ? " sponsored" : "");

            element.setAttribute("target", "_blank");
            element.setAttribute("rel", rel);
        });
        return element;
    }

    private transformIframes(element: Element, oembedUrl: string[]): string {
        const { document } = new JSDOM('<!DOCTYPE html>').window;
        element.querySelectorAll("figure.media").forEach((figure: Element, index: number) => {
            if (oembedUrl[index].includes("youtu.be")) figure.classList.add("youtube");

            const iframe = this.createIframe(oembedUrl[index], document);
            if (iframe) figure.innerHTML = iframe;
            else figure.remove();
        });

        return element.innerHTML;
    }

    private getIframes(element: Element): string[] {
        return Array.from(element.querySelectorAll("figure.media")).map((figure: Element) => {
            return figure.children.item(0)?.getAttribute("url") ?? "";
        });
    }

    private constructReferences(element: Element): IReference[] {
        const references = Array.from(element.querySelectorAll("span.editableSpan"))
            .map((element: Element) => ({
                URL: element.getAttribute("info-url") ?? "",
                displayText: element.getAttribute("info-text") ?? ""
            }));

        return references;
    }

    private referenceHTML(reference: IReference, index: number): JSX.Element {
        return <span className={"externalLink"} key={index}>{`[${++index}]. `}{reference.displayText}</span>
        // return <a className={"externalLink"} key={index} href={reference.URL} type="externalLink" target="_blank" rel="noopener noreferrer nofollow">{reference.displayText}</a>
    }

    private handleCrossReferenceClick = (): void => {
        const element = document.getElementById("bibliography") as Element;
        element?.scrollIntoView({ behavior: "smooth" });
        if (this.state.referencesCollapsed) {
            document.getElementById("dropdownMobilePlaceholder")?.click();
        }
    }

    private createIframe(url: string, documentTemp: Document): string {
        if (url.startsWith('https://youtu.be/')) {
            const pattern = /^https:\/\/youtu\.be\/([A-Za-z0-9_-]{11})$/;
            const match = url.match(pattern);

            if (match) {
                const src: string = `https://www.youtube.com/embed/${match[1]}`;
                return `<iframe width="100%" height="100%" frameborder="0"
                            allowfullscreen="" title="YouTube video player"
                            src="${src}"
                        />`
            }
        }

        if (url.startsWith('https://twitter.com/')) {
            const pattern = /https:\/\/twitter\.com\/([^\/]+)\/status\/(\d+)/;
            const match = url.match(pattern);
            if (match) {
                Utils.loadTwitterScript();
                return `<blockquote class="twitter-tweet" data-theme="dark" data-lang="es" data-dnt="false" data-width="550">
                            <a href="${url}" target="_blank" rel="noopener noreferrer nofollow"></a>
                        </blockquote>`;
            }
        }

        if (url.startsWith('https://www.instagram.com/')) {
            const pattern = /https:\/\/www\.instagram\.com\/p\/([\w-]+)/;
            const match = url.match(pattern);
            if (match) {
                const src: string = `https://www.instagram.com/p/${match[1]}/embed`;
                return `<iframe width="100%" height="600" frameborder="1" allowfullscreen=""
                            src="${src}"
                        />`
            }
        }

        return "";
    }
}
