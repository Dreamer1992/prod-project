import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// pages
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

// shared
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
export default AppRouter
