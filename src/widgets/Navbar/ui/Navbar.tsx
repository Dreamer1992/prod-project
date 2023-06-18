// hooks
import { useTranslation } from 'react-i18next'

// shared
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

// styles
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Navbar.module.scss'

interface IProps {
  className?: string
}

export const Navbar = ({ className }: IProps) => {
  const { t } = useTranslation(['main', 'about'])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t('Главная страница', { ns: 'main' })}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('О сайте', { ns: 'about' })}
        </AppLink>
      </div>
    </div>
  )
}
