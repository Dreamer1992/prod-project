import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// types
import { IUser, IUserSchema } from '../types/user'

export const USER = 'user'

const initialState: IUserSchema = {}

export const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
