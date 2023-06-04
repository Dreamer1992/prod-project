import { ButtonHTMLAttributes } from 'react'

// helpers
import { classNames } from 'helpers/classNames/classNames'

// styles
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
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
