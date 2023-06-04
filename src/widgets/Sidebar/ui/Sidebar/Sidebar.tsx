import { useState } from 'react'

// shared
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

// helpers
import { classNames } from 'helpers/classNames/classNames'

// styles
import cls from './Sidebar.module.scss'

interface IProps {
  className?: string
}

export const Sidebar = ({ className }: IProps) => {
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
      <button onClick={onToggle}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
