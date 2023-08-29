import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// types
import { ISidebarItem } from '../../model/items'

// styles
import cls from './SidebarItem.module.scss'

interface IProps {
  item: ISidebarItem
  isCollapsed: boolean
}

const SidebarItem = ({ item, isCollapsed }: IProps) => {
  const { t } = useTranslation('sidebar')

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: isCollapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
}

export default memo(SidebarItem)
