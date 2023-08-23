import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { setupListeners } from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  middleware: (gDM) => gDM(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

setupListeners(store.dispatch)
