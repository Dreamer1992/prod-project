import { useCallback } from 'react'

// hooks
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from 'shared/hooks'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// ui
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
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
  const dispatch = useAppDispatch()
  const { t } = useTranslation('translation')

  const { username, password, error, isLoading } = useAppSelector(getLoginState)

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
      <Text title={t('loginForm.auth_title')} />

      {error && (
        <Text
          text={t(error, 'Пользователь не найден')}
          theme={TextTheme.ERROR}
        />
      )}

      <Input
        type="text"
        className={cls.input}
        placeholder={t('loginForm.enter_name')}
        onChange={onChangeUsername}
        value={username}
      />

      <Input
        type="text"
        className={cls.input}
        placeholder={t('loginForm.enter_password')}
        onChange={onChangePassword}
        value={password}
      />

      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        disabled={isLoading}
        onClick={onLoginClick}
      >
        {t('Войти')}
      </Button>
    </div>
  )
}
