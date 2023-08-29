import { Story } from '@storybook/react'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'

// reducers
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

// types
import { TReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: TReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
}

export const StoreDecorator =
  (state: DeepPartial<IStateSchema>, asyncReducers?: TReducerList) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )

//   export const StoreDecorator =
// (state: DeepPartial<IStateSchema>, asyncReducers?: TReducerList) =>
// (StoryComponent: Story) => {
//   const DecoratedComponent = () => (
//     <StoreProvider
//       initialState={state}
//       asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
//     >
//       <StoryComponent />
//     </StoreProvider>
//   )

//   DecoratedComponent.name = `StoreDecorator(${StoryComponent.name})`

//   return DecoratedComponent
// }
