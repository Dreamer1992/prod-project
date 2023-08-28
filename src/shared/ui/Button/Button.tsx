import { ButtonHTMLAttributes, memo } from 'react'

// shared
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  SM = 'size_small',
  MD = 'size_medium',
  LG = 'size_large',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  isSquare?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button = memo((props: IProps) => {
  const {
    className,
    children,
    theme,
    isSquare,
    disabled,
    size = ButtonSize.MD,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: isSquare,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  }

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
