import { Component, ReactNode } from "react";
import { GoabButton, GoabText, GoabBlock } from "@abgov/react-components";

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

/**
 * Error Boundary component to catch JavaScript errors in child components.
 * Displays a fallback UI instead of crashing the entire application.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: { componentStack?: string | null }) {
        console.error("ErrorBoundary caught an error:", error, info);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <GoabBlock gap="l" mt="3xl" mb="3xl" alignment="center">
                    <GoabText tag="h2" size="heading-m">
                        Something went wrong
                    </GoabText>
                    <GoabText>
                        An unexpected error occurred. Please try again or contact support if the problem persists.
                    </GoabText>
                    {this.state.error && (
                        <GoabText size="body-s" mt="m">
                            Error: {this.state.error.message}
                        </GoabText>
                    )}
                    <GoabButton type="primary" onClick={this.handleReset}>
                        Try again
                    </GoabButton>
                </GoabBlock>
            );
        }

        return this.props.children;
    }
}
