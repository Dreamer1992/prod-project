import { useState, useMemo } from 'react'

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext'

const defaultTheme =
  (window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface IProps {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const memoizedValue = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
