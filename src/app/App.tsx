// router
import { AppRouter } from 'app/providers/router'

// hooks
import { useTheme } from 'app/providers/ThemeProvider/ui'

// helpers
import { classNames } from 'helpers/classNames/classNames'
import { Navbar } from 'widgets/Navbar'

// styles
import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  )
}

export default App
