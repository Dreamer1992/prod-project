import { useState } from 'react'

// hooks
import { useTranslation } from 'react-i18next'

// widgets
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'

// shared
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

// assets
import AboutIcon from 'shared/assets/icons/about_page.svg'
import MainIcon from 'shared/assets/icons/main_page.svg'

// styles
import cls from './Sidebar.module.scss'

interface IProps {
  className?: string
}

export const Sidebar = ({ className }: IProps) => {
  const { t } = useTranslation(['main', 'about'])

  const [isCollapsed, setIsCollapsed] = useState(false)

  const onToggle = () => {
    setIsCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Главная страница', { ns: 'main' })}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О сайте', { ns: 'about' })}</span>
        </AppLink>
      </div>

      <Button
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.LG}
        isSquare
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShort={isCollapsed} />
      </div>
    </div>
  )
}
