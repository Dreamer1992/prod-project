import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

// project imports
import App from './app/App'

// themes
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'

// shared
import 'shared/config/i18n/i18n'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
