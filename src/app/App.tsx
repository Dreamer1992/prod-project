import { Suspense, useEffect } from 'react'

// router
import { AppRouter } from 'app/providers/router'

// hooks
import { useTheme } from 'app/providers/ThemeProvider'
import { useAppDispatch } from 'shared/lib/hooks'

// actions
import { userActions } from 'entities/User'

// widgets
import { Sidebar } from 'widgets/Sidebar'
import { Navbar } from 'widgets/Navbar'

// shared
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
  const dispatch = useAppDispatch()
  const { theme } = useTheme()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [])

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
