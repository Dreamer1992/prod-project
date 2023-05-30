import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// pages
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
export default AppRouter
