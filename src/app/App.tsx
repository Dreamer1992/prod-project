import { Suspense } from 'react'

// router
import { AppRouter } from 'app/providers/router'

// hooks
import { useTheme } from 'app/providers/ThemeProvider'

// widgets
import { Sidebar } from 'widgets/Sidebar'
import { Navbar } from 'widgets/Navbar'

// shared
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
