import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { NavigateOptions, To } from 'react-router-dom'

import { clientApi } from 'shared/api/api'

import { createReducerManager } from './reducerManager'
import { staticReducers } from './staticReducers'

// types
import { IStateSchema, IThunkExtraArg } from './StateSchema'

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    ...staticReducers,
  }

  const reducerManager = createReducerManager(rootReducers)

  const thunkExtraArg: IThunkExtraArg = { api: clientApi, navigate }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDM) =>
      getDM({
        thunk: {
          extraArgument: thunkExtraArg,
        },
      }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<typeof createReduxStore>['getState']
