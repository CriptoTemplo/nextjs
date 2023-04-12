import * as React from 'react';
import styles from "@/styles/toast.module.scss"

export interface IToastProps {
}

export interface IToastState {
    text: string;
    type: TToast;
    isRendering: boolean;
}

type TToast = "Informational" | "Sucess" | "Warning" | "Error";

export default class Toast extends React.Component<IToastProps, IToastState> {

    private timeoutId: ReturnType<typeof setTimeout> | undefined;

    constructor(props: IToastProps) {
        super(props);

        this.state = {
            text: "",
            type: "Informational",
            isRendering: false
        }
    }

    public componentWillUnmount(): void {
        if (this.timeoutId) clearTimeout(this.timeoutId);
    }

    public render() {
        const displayStyle = this.state.isRendering ? 'block' : 'none';
        const opacity = this.state.isRendering ? '1' : '0';
        const className = `${styles.toast} ${this.getClassname(this.state.type)}`;
        return (
            <div className={className} style={{ display: displayStyle, opacity: opacity }}>
                {this.state.text}
            </div>
        );
    }

    public showToast(text: string, type: TToast): void {
        if (text === this.state.text && type === this.state.type && this.timeoutId) return;

        this.setState({
            text,
            type,
            isRendering: true
        })

        // Clear the existing timeout before setting a new one
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }

        // Set a new timeout to hide the toast after 3 seconds
        this.timeoutId = setTimeout(() => {
            this.setState({ isRendering: false });
            this.timeoutId = undefined;
        }, 3000);
    }

    private getClassname(type: TToast): any {
        switch (type) {
            case "Informational":
                return styles.informational;
            case "Sucess":
                return styles.sucess;
            case "Warning":
                return styles.warning;
            case "Error":
                return styles.error;
            default:
                return "";
        }
    }
}
