import * as React from 'react';

export interface ISocialShareProps {
}

export interface ISocialShareState {
}

export default class SocialShare extends React.Component<ISocialShareProps, ISocialShareState> {
    constructor(props: ISocialShareProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
                Social Share
            </div>
        );
    }
}
