import { createAsyncThunk } from '@reduxjs/toolkit'

import { IUser, userActions } from 'entities/User'

// constants
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

// types
import { IThunkConfig } from 'app/providers/StoreProvider'

export interface ILoginByUsernameArgs {
  username: string
  password: string
}

export const loginByUsernameThunk = createAsyncThunk<
  IUser,
  ILoginByUsernameArgs,
  IThunkConfig<string>
>(
  'LOGIN/loginByUsername',
  async (authData, { rejectWithValue, dispatch, extra }) => {
    try {
      const res = await extra.api.post<IUser>('/login', authData)

      if (!res.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data))
      dispatch(userActions.setAuthData(res.data))

      return res.data
    } catch (err) {
      return rejectWithValue('loginForm.user_not_found')
    }
  }
)
