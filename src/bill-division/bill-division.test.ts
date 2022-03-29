import { bonAppetit } from './bill-division-ts'

describe('', () => {
  console.log = jest.fn();

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should log Bon Appetit', () => {
    bonAppetit([3, 10, 2, 9], 1, 7)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toBeCalledWith('Bon Appetit')
  })

  it('should log 5', () => {
    bonAppetit([3, 10, 2, 9], 1, 12)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toBeCalledWith(5)
  })

  it('should log Bon Appetit', () => {
    bonAppetit([9], 0, 0)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toBeCalledWith('Bon Appetit')
  })
})
