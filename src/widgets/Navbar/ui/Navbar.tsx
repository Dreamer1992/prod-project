// hooks
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// ui
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

// features
import { LoginModal } from 'features/AuthByUsername'

// styles
import cls from './Navbar.module.scss'

interface IProps {
  className?: string
}

export const Navbar = ({ className }: IProps) => {
  const { t } = useTranslation(['translation'])

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
