import { useState } from 'react'

// hooks
import { useTranslation } from 'react-i18next'

// widgets
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'

// shared
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Sidebar.module.scss'

interface IProps {
  className?: string
}

export const Sidebar = ({ className }: IProps) => {
  const { t } = useTranslation('translation')

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
      <button onClick={onToggle}>{t('Переключить')}</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
