// libs
import { classNames } from 'shared/lib/classNames/classNames'

// ui
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface IProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: IProps) => (
  <Modal
    className={classNames('', {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
  >
    <LoginForm />
  </Modal>
)
