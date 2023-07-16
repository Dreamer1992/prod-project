// hooks
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

// styles
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

interface IProps {
  className?: string
}

export const Navbar = ({ className }: IProps) => {
  const { t } = useTranslation(['main', 'about'])
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.'
        )}
      </Modal>
    </div>
  )
}
