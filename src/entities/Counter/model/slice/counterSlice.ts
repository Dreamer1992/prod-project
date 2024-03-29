import { createSlice } from '@reduxjs/toolkit'

// types
import { COUNTER, ICounterSchema } from '../types/counterSchema'

const initialState: ICounterSchema = {
  value: 0,
}

export const counterSlice = createSlice({
  name: COUNTER,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
