import { NextRouter } from 'next/dist/client/router'
import React from 'react'

interface Props {
  router: NextRouter
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error and errorInfo
    console.log({ error, errorInfo })
    // Save the error and errorInfo to the state
    this.setState({ error, errorInfo })
  }

  render() {
    const { hasError, error, errorInfo } = this.state

    if (hasError) {
      return (
        <div>
          <h2 className="text-warning">Oops, there is an error!</h2>
          <div className="text-gray-300">
            {error && <div>Error: {error.toString()}</div>}
            {errorInfo && <div>Error Info: {errorInfo.componentStack}</div>}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
