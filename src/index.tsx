import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

// project imports
import App from './app/App'

// shared
import 'shared/config/i18n/i18n'

// themes
import { ThemeProvider } from 'app/providers/ThemeProvider'

// styles
import 'app/styles/index.scss'

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
