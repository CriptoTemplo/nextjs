import Global from "../definitions/global";
import Head from 'next/head'

// TODO esto tampoco mola, habria que hacer un ipartial o algo asi
export interface IMetaTags {
    title: string;
    description: string;
    canonical?: string;
    published_time?: string;
    modified_time?: string;
}

//TODO revisar etiquetas
export function getHead(metadata: IMetaTags): JSX.Element {
    const canonical: string = Global.hostFront + metadata.canonical;
    return (
        <>
        <Head>
            <title>{metadata.title}</title>
            <meta name="title" content={metadata.title} />
            <meta name="description" content={metadata.description} />
            <link rel="canonical" href={canonical} />
            <meta property="article:published_time" content={metadata.published_time} />
            <meta property="article:modified_time" content={metadata.modified_time} />
            <meta property="og:updated_time" content={metadata.modified_time} />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:url" content={canonical} />
        </Head>
        </>
    );
}
