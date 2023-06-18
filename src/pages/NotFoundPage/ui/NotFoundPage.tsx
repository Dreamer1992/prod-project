// hooks
import { useTranslation } from 'react-i18next'

// shared
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cn from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cn.NotFoundPage, {})}>
      {t('Страница не найдена')}
    </div>
  )
}

export default NotFoundPage
