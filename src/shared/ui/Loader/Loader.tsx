// shared
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import './Loader.scss'

interface IProps {
  className?: string
}

export const Loader = ({ className }: IProps) => (
  <div className={classNames('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
)
