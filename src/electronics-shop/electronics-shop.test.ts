import { getMoneySpent } from './electronics-shop-ts'

describe('', () => {
  it('should return 9', () => {
    expect(getMoneySpent([3, 1], [5, 2, 8], 10)).toBe(9)
  })

  it('should return -1', () => {
    expect(getMoneySpent([4], [5], 5)).toBe(-1)
  })

  it('should return -1', () => {
    expect(getMoneySpent([], [], 1000)).toBe(-1)
  })
})
