// hooks
import { useTranslation } from 'react-i18next'

// shared
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'

// styles
import cls from './PageError.module.scss'

interface IProps {
  className?: string
}

export const PageError = ({ className }: IProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Извините... произошла ошибка')}</p>

      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}
