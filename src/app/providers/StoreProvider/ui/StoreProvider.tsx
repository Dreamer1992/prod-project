import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial } from '@reduxjs/toolkit'

import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

interface IProps {
  children?: ReactNode
  initialState?: DeepPartial<IStateSchema>
}

export const StoreProvider = (props: IProps) => {
  const { children, initialState } = props

  const store = createReduxStore(initialState as IStateSchema)

  return <Provider store={store}>{children}</Provider>
}
