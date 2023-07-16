import { Theme, useTheme } from 'app/providers/ThemeProvider'

// shared
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

// icons
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

interface IProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: IProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
