import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStatefromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(
      "ErrorBoundary caught an unexpected crash: ",
      error,
      errorInfo,
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "40px",
            textAlign: "center",
            color: "white",
            background: "#111",
          }}
        >
          <h2 style={{ color: "crimson" }}>
            Something went wrong inside this view. ⚠️
          </h2>
          <p>Please refresh the page or try navigating somewhere else.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              background: "gold",
              border: "none",
              borderRadius: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🔄️ Reload App
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
