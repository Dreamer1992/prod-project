import {
  Action,
  ThunkAction,
  configureStore,
  ReducersMapObject,
  AnyAction,
  Reducer,
  CombinedState,
  EnhancedStore,
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { createReducerManager } from './reducerManager'
import { staticReducers } from './reducers'
import { IStateSchema, TStateSchemaKey } from './StateSchema'

const reducerManager = createReducerManager(staticReducers)

export const store = configureStore({
  reducer: reducerManager.reduce,
  devTools: __IS_DEV__,
  middleware: (gDM) => gDM(),
})

// @ts-ignore
store.reducerManager = reducerManager

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

setupListeners(store.dispatch)

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>
  add: (key: TStateSchemaKey, reducer: Reducer) => void
  remove: (key: TStateSchemaKey) => void
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager
}
