import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial } from '@reduxjs/toolkit'

import { store } from 'app/providers/StoreProvider/config/store'

// types
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

interface IProps {
  children?: ReactNode
  initialState?: DeepPartial<IStateSchema>
}

export const StoreProvider = (props: IProps) => {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}
