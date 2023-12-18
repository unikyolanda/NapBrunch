import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // 更新 state 以便下一次渲染顯示備用 UI
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // 你也可以將錯誤記錄到錯誤報告系統
      console.error('Error caught by Error Boundary:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // 你可以渲染任何自定義的備用 UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
  
export default ErrorBoundary;