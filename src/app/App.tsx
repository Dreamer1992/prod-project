import { Link } from 'react-router-dom'

// styles
import './styles/index.scss'

// router
import { AppRouter } from 'app/providers/router'

// hooks
import { useTheme } from 'app/providers/ThemeProvider/ui'

// helpers
import { classNames } from 'helpers/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Тема</button>

      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <AppRouter />
    </div>
  )
}

export default App
