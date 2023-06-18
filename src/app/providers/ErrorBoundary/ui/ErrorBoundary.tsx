import { Component, ErrorInfo, ReactNode, Suspense } from 'react'

// widgets
import { PageError } from 'widgets/PageError'

interface IProps {
  children?: ReactNode
}

interface IState {
  hasError: boolean
}

class ErrorBoundary extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
  }

  public static getDerivedStateFromError(): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
