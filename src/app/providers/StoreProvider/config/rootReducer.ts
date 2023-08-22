import { combineReducers } from '@reduxjs/toolkit'

// reducers
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  loginForm: loginReducer,
})
