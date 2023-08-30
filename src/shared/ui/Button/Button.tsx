import { ButtonHTMLAttributes, memo } from 'react'

// shared
import { TMods, classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Button.module.scss'

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
  // CLEAR = 'clear',
  // CLEAR_INVERTED = 'clearInverted',
  // BACKGROUND = 'background',
  // BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonColor {
  PRIMARY = 'primary', // add style
  SECONDARY = 'secondary', // add style
  SUCCESS = 'success', // add style
  WARNING = 'warning', // add style
  ERROR = 'error',
}

export enum ButtonSize {
  SMALL = 'size_small',
  MEDIUM = 'size_medium',
  LARGE = 'size_large',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  color?: ButtonColor
  isSquare?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button = memo((props: IProps) => {
  const {
    className,
    children,
    isSquare,
    disabled,
    variant = ButtonVariant.CONTAINED,
    color = ButtonColor.PRIMARY,
    size = ButtonSize.MEDIUM,
    ...otherProps
  } = props

  const mods: TMods = {
    [cls.square]: isSquare,
    [cls.disabled]: disabled,
  }

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [
        cls[color],
        cls[variant],
        cls[size],
        className,
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
