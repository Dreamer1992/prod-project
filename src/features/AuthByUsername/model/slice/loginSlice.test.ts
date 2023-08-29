import { loginActions, loginReducer } from './loginSlice'
import { ILoginSchema } from '../types/loginSchema'

describe('loginSlice.test', () => {
  it('test set username', () => {
    const state: DeepPartial<ILoginSchema> = { username: 'john' }
    expect(
      loginReducer(state as ILoginSchema, loginActions.setUsername('john'))
    ).toEqual({ username: 'john' })
  })

  it('test set password', () => {
    const state: DeepPartial<ILoginSchema> = { password: '123' }
    expect(
      loginReducer(state as ILoginSchema, loginActions.setPassword('123'))
    ).toEqual({ password: '123' })
  })
})
