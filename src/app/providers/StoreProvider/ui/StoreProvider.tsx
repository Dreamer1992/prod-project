import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { createReduxStore } from '../config/store'

// types
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

interface IProps {
  children?: ReactNode
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider = (props: IProps) => {
  const { children, initialState, asyncReducers } = props

  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>
  )

  setupListeners(store.dispatch)

  return <Provider store={store}>{children}</Provider>
}
