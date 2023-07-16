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
  initialTheme?: Theme
}

const ThemeProvider = ({ children, initialTheme }: IProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const memoizedValue = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
