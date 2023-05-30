import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

// styles
import './styles/index.scss'

// pages
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'

// hooks
import { useTheme } from './styles/theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Тема</button>

      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
