import React, { Component } from 'react';
import { IEmpty, IPost } from '../../definitions/definitions'; // TODO esto habra que mejorarlo
import DOMPurify from 'isomorphic-dompurify';
import Utils from "../../utils/utils";

// TODO pls FIXME
class Auxiliar extends Component<IPost, IEmpty> {

    public constructor(props: IPost) {
        super(props);
    }

    public render() {
        if (Utils.isObjectEmpty(this.props)) return "";

        let midPost: JSX.Element = this.midPost();

        return (
            <div className="readPost">
                {midPost}
            </div>
        );
    }

    private midPost(): JSX.Element {
        const test = this.mountHtmlContent();

        return (
            <div>
                {test}
            </div>
        );
    }

    private mountHtmlContent(): JSX.Element {
        return (
            <div>
                {<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.content) }} />}
            </div>
        );
    }
}

export default Auxiliar;