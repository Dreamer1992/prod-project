import axios from 'axios'

import { loginByUsernameThunk } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsernameThunk.test', () => {
  it('success login', async () => {
    const userValue = { id: '1', username: '123' }

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUsernameThunk)
    const res = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    )
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('fulfilled')
    expect(res.payload).toEqual(userValue)
  })

  it('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsernameThunk)
    const res = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.payload).toBe('loginForm.user_not_found')
  })

  //   let dispatch: Dispatch
  //   let getState: () => IStateSchema

  //   beforeEach(() => {
  //     dispatch = jest.fn()
  //     getState = jest.fn()
  //   })

  //   it('success login', async () => {
  //     const userValue = { id: '1', username: '123' }

  //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
  //     const action = loginByUsernameThunk({ username: '123', password: '123' })
  //     const res = await action(dispatch, getState, undefined)

  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //     expect(dispatch).toHaveBeenCalledTimes(3)

  //     expect(mockedAxios.post).toHaveBeenCalled()
  //     expect(res.meta.requestStatus).toBe('fulfilled')
  //     expect(res.payload).toEqual(userValue)
  //   })

  //   it('error login', async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //     const action = loginByUsernameThunk({ username: '123', password: '123' })
  //     const res = await action(dispatch, getState, undefined)

  //     expect(dispatch).toHaveBeenCalledTimes(2)

  //     expect(mockedAxios.post).toHaveBeenCalled()
  //     expect(res.meta.requestStatus).toBe('rejected')
  //     expect(res.payload).toBe('loginForm.user_not_found')
  //   })
})
