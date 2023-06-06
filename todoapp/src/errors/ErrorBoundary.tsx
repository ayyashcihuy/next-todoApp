'use client'

import React, { ReactNode } from "react"
import ErrorModal from "./ErrorDisplay"

interface Props {
    children?: ReactNode
}

interface State {
    hasError: boolean,
    errMsg: string
}

class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        hasError: false,
        errMsg: ""
    };

    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render gonna show the fallback UI for Errors.
        return {hasError: true, errMsg: error.message}
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error("Uncaught Error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <ErrorModal errMsg={this.state.errMsg} />
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;