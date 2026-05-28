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
            color: "#black",
            background: "#white",
            borderRadius: '12px',
            margin: '40px auto',
            maxWidth: '500px',
            border: '2px solid crimson',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        >
          <h2 style={{ color: "crimson", fontSize: "1.5rem", marginTop: 0 }}>
            Something went wrong inside this view. ⚠️
          </h2>
          <p style={{color: '#cccccc'}}>Please refresh the page or try navigating somewhere else.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              background: "gold",
              border: "none",
              borderRadius: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: '15px'
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
