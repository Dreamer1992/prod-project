import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator =
  // eslint-disable-next-line react/display-name
  (state: DeepPartial<IStateSchema>) => (StoryComponent: Story) =>
    <StoreProvider initialState={state}>{<StoryComponent />}</StoreProvider>
