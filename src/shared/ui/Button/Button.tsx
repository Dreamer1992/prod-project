import { ButtonHTMLAttributes } from 'react'

// shared
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button = (props: IProps) => {
  const { className, children, theme, ...otherProps } = props

  return (
    <button
      className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
