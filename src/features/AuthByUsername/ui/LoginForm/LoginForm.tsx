import { useCallback } from 'react'

// hooks
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/hooks'
import { useSelector } from 'react-redux'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// ui
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'

// actions
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

// thunks
import { loginByUsernameThunk } from '../../model/services/loginByUsername/loginByUsername'

// selectors
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

import {
  TReducerList,
  DynamicModuleLoader,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

// styles
import cls from './LoginForm.module.scss'

interface IProps {
  className?: string
  onCloseModal: () => void
}

const initialReducers: TReducerList = {
  loginForm: loginReducer,
}

const LoginForm = ({ className, onCloseModal }: IProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('translation')

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value))
  }, [])

  const onChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value))
  }, [])

  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUsernameThunk({ username, password }))

    if (res.meta.requestStatus === 'fulfilled') onCloseModal()
  }, [username, password])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
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
          {t('loginForm.login', 'Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default LoginForm
