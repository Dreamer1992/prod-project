// reducers
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export const staticReducers = {
  counter: counterReducer,
  user: userReducer,
}
