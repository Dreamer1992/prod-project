// shared
import { Loader } from 'shared/ui/Loader/Loader'
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './PageLoader.module.scss'

interface IProps {
  className?: string
}

export const PageLoader = ({ className }: IProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
)
