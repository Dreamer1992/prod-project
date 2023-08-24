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
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

// thunks
import { loginByUsernameThunk } from '../../model/services/loginByUsername/loginByUsername'

// selectors
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

// styles
import cls from './LoginForm.module.scss'
import DynamicModuleLoader, {
  TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface IProps {
  className?: string
}

const initialReducers: TReducerList = {
  loginForm: loginReducer,
}

const LoginForm = ({ className }: IProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('translation')

  const username = useAppSelector(getLoginUsername)
  const password = useAppSelector(getLoginPassword)
  const isLoading = useAppSelector(getLoginIsLoading)
  const error = useAppSelector(getLoginError)

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
