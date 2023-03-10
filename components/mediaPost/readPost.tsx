import React, { Component } from "react";
import { IAuthor, IEmpty, IGuia, IPost } from "@/definitions/definitions"; // TODO esto habra que mejorarlo
import DOMPurify from "isomorphic-dompurify";
import Global from "@/definitions/global";
import Utils from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export default class ReadPost extends Component<IGuia, IEmpty> {

    public constructor(props: IGuia) {
        super(props);
    }

    // After the component did mount
    public componentDidMount() {
    }

    public render() {
        if (Utils.isObjectEmpty(this.props)) return "";

        let upperPost: JSX.Element = this.upperPost();
        let midPost: JSX.Element = this.midPost();
        let lowerPost: JSX.Element = this.lowerPost();

        return (
            <div className="readPost">
                {upperPost}
                {midPost}
                {/*lowerPost*/}
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
                    />
                </div>
                <div className="extraInfo">
                    <span className="updatedDate">
                        {"Actualización: " + this.formatDate(this.props.updatedAt)}
                    </span>
                    <div className="dataCenter">
                        <i className="icon" />
                        <span> {"3,3k"} </span>
                    </div>
                    <span className="readTimeLong">
                        {"Tiempo de lectura: " + post.readTime + "min."}
                    </span>
                </div>
                <hr style={{marginBottom: "2rem"}}/>
            </div>
        );
    }

    private renderAuthorsWrappers(authors: IAuthor[], reviewer: IAuthor): JSX.Element {
        return (
            <div className="authorsWrapper">
                <div className="authors">
                    {authors.map((author: IAuthor, index: number) => {
                        return (
                            <>
                                <div key={index} className="profilePic">
                                    <Image src={Global.host + author.profilePic.url}
                                        alt={"Foto de perfil de " + author.name}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </>
                        )
                    })}
                {this.constructAuthorsString(authors)}
                </div>
                <div className="reviewer">
                    <i className="icon" />
                    <span className="reviewerHref">Revisado por: <Link href={"/sobre-nosotros/" + reviewer.URL}>{reviewer.name}</Link></span>
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
                <>
                    <Link key={index} href={"/sobre-nosotros/" + author.URL}>{author.name}</Link>
                    {index < authors.length - 1 ? <span> y </span> : ""}
                </>
            )
        })
        return (
            <span className="authorsHrefs">{aux}{authorsHrefs}</span>
        )
    }

    private midPost(): JSX.Element {
        const test = this.mountHtmlContent();

        return (
            <div>
                {test}
            </div>
        );
    }

    private lowerPost(): JSX.Element {
        return (
            <div>
                Lower
            </div>
        );
    }

    private mountHtmlContent(): JSX.Element {
        return (
            <div>
                {<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.Post.content) }} />}
            </div>
        );
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
}
