import { AsyncThunkAction } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'

type TActionCreator<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: jest.MockedFn<any>
  getState: () => IStateSchema
  actionCreator: TActionCreator<Return, Arg, RejectedValue>

  constructor(actionCreator: TActionCreator<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const res = await action(this.dispatch, this.getState, undefined)

    return res
  }
}
