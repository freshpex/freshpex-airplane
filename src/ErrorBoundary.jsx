import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex flex-col items-center justify-center h-screen"
          style={{ backgroundColor: "white" }}
        >
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold" style={{ color: "yellow" }}>
              Oops! Something went wrong.
            </p>
            <p className="text-xl mt-4" style={{ color: "black" }}>
              We're sorry for the inconvenience. Please try again later.
            </p>
            <button
              className="mt-6 bg-primary hover:bg-hover text-white font-bold py-2 px-4 rounded"
              onClick={this.handleReload}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
