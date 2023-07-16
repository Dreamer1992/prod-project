import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

// project imports
import App from './app/App'

// shared
import 'shared/config/i18n/i18n'

// themes
import { ThemeProvider } from 'app/providers/ThemeProvider'

// styles
import 'app/styles/index.scss'

import { ErrorBoundary } from 'app/providers/ErrorBoundary'

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
)
