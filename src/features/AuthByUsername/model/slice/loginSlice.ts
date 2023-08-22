import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// types
import { ILoginSchema } from '../types/loginSchema'

// thunks
import { loginByUsernameThunk } from '../services/loginByUsername/loginByUsername'

export const LOGIN = 'LOGIN'

const initialState: ILoginSchema = {
  username: '',
  password: '',
  isLoading: false,
}

const loginSlice = createSlice({
  name: LOGIN,
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: {
    [loginByUsernameThunk.pending.toString()]: (state) => {
      state.error = undefined
      state.isLoading = true
    },
    [loginByUsernameThunk.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [loginByUsernameThunk.rejected.toString()]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
