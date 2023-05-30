// helpers
import { classNames } from 'helpers/classNames/classNames'

// shared
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

// styles
import cls from './Navbar.module.scss'

interface IProps {
  className?: string
}

export const Navbar = ({ className }: IProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  )
}