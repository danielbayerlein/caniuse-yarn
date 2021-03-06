const shelljs = require('shelljs')
const caniuseYarn = require('../../lib')

describe('caniuseYarn', () => {
  beforeEach(() => {
    shelljs.which = jest.fn()
  })

  test('call shelljs.which with "yarn"', () => {
    caniuseYarn()
    expect(shelljs.which).toBeCalledWith('yarn')
  })

  test('returns true if yarn is available', () => {
    shelljs.which.mockReturnValue(true)
    expect(caniuseYarn()).toBeTruthy()
  })

  test('returns false if yarn is not available', () => {
    shelljs.which.mockReturnValue(false)
    expect(caniuseYarn()).toBeFalsy()
  })
})
