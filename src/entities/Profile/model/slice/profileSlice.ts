import { createSlice } from '@reduxjs/toolkit'

// types
import { IProfileSchema } from '../types/profile'

const initialState: IProfileSchema = {
  data: undefined,
  isLoading: false,
  isReadonly: true,
  error: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
