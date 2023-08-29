import { createAsyncThunk } from '@reduxjs/toolkit'

// types
import { IThunkConfig } from 'app/providers/StoreProvider'
import { PROFILE, IProfile } from '../../types/profile'

export const fetchProfileDataThunk = createAsyncThunk<
  IProfile,
  undefined,
  IThunkConfig<string>
>(`${PROFILE}/fetchProfileData`, async (_, { rejectWithValue, extra }) => {
  try {
    const res = await extra.api.get<IProfile>('/profile')
    return res.data
  } catch (err) {
    return rejectWithValue('error')
  }
})
