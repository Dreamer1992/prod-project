import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

// types
import { TStateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { IReduxStoreWithManager } from 'app/providers/StoreProvider'

export type TReducerList = {
  [name in TStateSchemaKey]?: Reducer
}

type ReducerListEntry = [TStateSchemaKey, Reducer]

interface IProps {
  children: React.ReactNode
  reducers: TReducerList
  removeAfterUnmount?: boolean
}

const DynamicModuleLoader = ({
  children,
  reducers,
  removeAfterUnmount,
}: IProps) => {
  const store = useStore() as IReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer)
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name)
        })
      }
    }
  }, [])

  return <>{children}</>
}

export default DynamicModuleLoader
