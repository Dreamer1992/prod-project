import { Theme, useTheme } from 'app/providers/ThemeProvider/ui'

// shared
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

// icons
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

// styles
import cls from './ThemeSwitcher.module.scss'

interface IProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: IProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}