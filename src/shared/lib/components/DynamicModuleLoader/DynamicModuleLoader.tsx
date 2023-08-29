import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

// types
import { TStateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { IReduxStoreWithManager } from 'app/providers/StoreProvider'

export type TReducerList = {
  [name in TStateSchemaKey]?: Reducer
}

interface IProps {
  children: React.ReactNode
  reducers: TReducerList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({
  children,
  reducers,
  removeAfterUnmount = true,
}: IProps) => {
  const store = useStore() as IReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as TStateSchemaKey, reducer)
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as TStateSchemaKey)
        })
      }
    }
  }, [])

  return <>{children}</>
}
