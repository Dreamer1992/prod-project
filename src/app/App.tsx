import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

// styles
import './styles/index.scss'

// pages
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

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

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
