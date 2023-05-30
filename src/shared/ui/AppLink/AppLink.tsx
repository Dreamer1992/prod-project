import { Link, LinkProps } from 'react-router-dom'

// helpers
import { classNames } from 'helpers/classNames/classNames'

// styles
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink = (props: IProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames('cls.AppLink', {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
