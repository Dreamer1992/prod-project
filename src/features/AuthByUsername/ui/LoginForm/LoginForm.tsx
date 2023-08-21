// hooks
import { useTranslation } from 'react-i18next'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// ui
import { Button } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'

// styles
import cls from './LoginForm.module.scss'

interface IProps {
  className?: string
}

export const LoginForm = ({ className }: IProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
      />

      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
      />

      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  )
}
