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
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsernameThunk.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsernameThunk.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByUsernameThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
