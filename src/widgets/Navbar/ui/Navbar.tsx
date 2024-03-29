import { useCallback, useState, memo } from 'react'

// hooks
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/hooks'
import { useSelector } from 'react-redux'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// ui
import { Button } from 'shared/ui/Button/Button'

// features
import { LoginModal } from 'features/AuthByUsername'

// selectors
import { getUserAuthData, userActions } from 'entities/User'

// styles
import cls from './Navbar.module.scss'

interface IProps {
  className?: string
}

const Navbar = ({ className }: IProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation(['translation'])

  const authData = useSelector(getUserAuthData)

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button className={cls.links} onClick={onLogout}>
          {t('navbar.logout', 'Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button className={cls.links} onClick={onShowModal}>
        {t('navbar.login', 'Войти')}
      </Button>

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  )
}

export default memo(Navbar)
