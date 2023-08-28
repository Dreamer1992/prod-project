import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'

import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer
}

export const StoreDecorator =
  (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
  ) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        {<StoryComponent />}
      </StoreProvider>
    )
