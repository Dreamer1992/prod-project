import { useCallback } from 'react'

// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// ui
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'

// actions
import { loginActions } from '../../model/slice/loginSlice'

// thunks
import { loginByUsernameThunk } from '../../model/services/loginByUsername/loginByUsername'

// selectors
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'

// styles
import cls from './LoginForm.module.scss'

interface IProps {
  className?: string
}

export const LoginForm = ({ className }: IProps) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const { username, password } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value))
  }, [])

  const onChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value))
  }, [])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsernameThunk({ username, password }))
  }, [username, password])

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
        onChange={onChangeUsername}
        value={username}
      />

      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />

      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
      >
        {t('Войти')}
      </Button>
    </div>
  )
}
