import { configureStore } from '@reduxjs/toolkit'

// types
import { IStateSchema } from './StateSchema'

// reducers
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'

export function createReduxStore(initialState?: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      loginForm: loginReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
