import { classNames } from './classNames'

describe('classNames', () => {
  it('должна возвращать правильное имя класса', () => {
    const cls = 'button'
    const mods = {
      'button--primary': true,
      'button--large': false,
      'button--disabled': true,
    }
    const additional = ['extra-class']

    const result = classNames(cls, mods, additional)

    expect(result).toBe('button extra-class button--primary button--disabled')
  })
})
