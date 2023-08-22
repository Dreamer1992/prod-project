import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// constants
import { LOGIN } from '../../slice/loginSlice'

// types
import { IUser } from 'entities/User'

export interface ILoginByUsernameArgs {
  username: string
  password: string
}

export const loginByUsernameThunk = createAsyncThunk<
  IUser,
  ILoginByUsernameArgs
>(`${LOGIN}/loginByUsername`, async (authData, { rejectWithValue }) => {
  try {
    const res = await axios.post<IUser>('http://localhost:8000/login', authData)

    if (!res.data) {
      throw new Error()
    }

    return res.data
  } catch (err) {
    rejectWithValue('Ошибка авторизации')
  }
})
