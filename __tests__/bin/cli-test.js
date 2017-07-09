jest.mock('../../package.json', () => ({
  name: 'caniuse-yarn',
  version: '1.0.0'
}))

const program = require('commander')
const updateNotifier = require('update-notifier')

describe('cli.js', () => {
  let caniuseYarn

  beforeEach(() => {
    program.version = jest.fn().mockReturnThis()
    program.parse = jest.fn()
    updateNotifier.notify = jest.fn()
    process.exit = jest.fn()

    jest.mock('../../lib')
    caniuseYarn = require('../../lib')
  })

  afterEach(() => {
    jest.resetAllMocks()
    jest.resetModules()
  })

  test('program.version returns the current package version', () => {
    require('../../bin/cli')
    expect(program.version).toBeCalledWith('1.0.0')
  })

  test('call process.exit with "0" if yarn is availible', () => {
    caniuseYarn.mockImplementation(() => true)
    require('../../bin/cli')
    expect(process.exit).toBeCalledWith(0)
  })

  test('call process.exit with "1" if yarn is not availible', () => {
    caniuseYarn.mockImplementation(() => false)
    require('../../bin/cli')
    expect(process.exit).toBeCalledWith(1)
  })
})
