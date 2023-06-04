// router
import { AppRouter } from 'app/providers/router'

// hooks
import { useTheme } from 'app/providers/ThemeProvider/ui'

// widgets
import { Sidebar } from 'widgets/Sidebar'

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

      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
