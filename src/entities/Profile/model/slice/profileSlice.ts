import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// thunks
import { fetchProfileDataThunk } from '../services/fetchProfileData/fetchProfileData'

// types
import { IProfile, IProfileSchema, TProfileUpdate } from '../types/profile'

const initialState: IProfileSchema = {
  data: undefined,
  form: undefined,
  isLoading: false,
  isReadonly: true,
  error: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.isReadonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<TProfileUpdate>) => {
      state.form = { ...state.form, ...action.payload }
    },
    cancelEdit: (state) => {
      state.isReadonly = true
      state.form = state.data
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileDataThunk.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchProfileDataThunk.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
        }
      )
      .addCase(fetchProfileDataThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
