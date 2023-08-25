import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { createReducerManager } from './reducerManager'
import { staticReducers } from './staticReducers'
import { IStateSchema } from './StateSchema'

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    ...staticReducers,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<typeof createReduxStore>['getState']
