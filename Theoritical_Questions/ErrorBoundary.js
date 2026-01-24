import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Updates state so the next render shows the fallback UI, it catches the error and updates the state
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Used for side effects like logging the error to a service (e.g., Sentry)
  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;


/**Limitation of error boundary */
/*They only catch errors that occur during rendering, in lifecycle methods, and in constructors. 
Error boundaries cannot catch the following types of errors:
Event Handlers: Errors occurring inside functions like onClick or onSubmit are not caught because they happen outside of the rendering phase.
Asynchronous Code: Errors in callbacks such as setTimeout, requestAnimationFrame, or within Promises (e.g., failed fetch calls) cannot be captured.
Server-Side Rendering (SSR): Error boundaries are client-side features and do not catch errors that occur during the initial SSR process on the server.
Internal Errors: An error boundary cannot catch an error that is thrown inside itself (rather than in its children).
Global/Library Errors: Errors thrown by the React library itself or errors occurring in the global execution context outside of the React component tree.*/