// libraries
import { Component, ErrorInfo, ReactNode } from "react";



type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};



class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  };
  
  static getDerivedStateFromError(_: Error): State {
    return {hasError: true};
  };
  
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("error:", error, info);
  };
  
  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h1>
            Something went wrong...
          </h1>
          <p>
            Please refresh the page, it might help.
          </p>
        </section>
      );
    }
    return this.props.children;
  };
};

export default ErrorBoundary;
