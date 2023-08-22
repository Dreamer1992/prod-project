import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// constants
import { LOGIN } from '../../slice/loginSlice'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

import { IUser, userActions } from 'entities/User'

export interface ILoginByUsernameArgs {
  username: string
  password: string
}

export const loginByUsernameThunk = createAsyncThunk<
  IUser,
  ILoginByUsernameArgs
>(
  `${LOGIN}/loginByUsername`,
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post<IUser>(
        'http://localhost:8000/login',
        authData
      )

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
