import { countingValleys } from './count-valleys'

describe('countingValleys', () => {
  it('should return one valley', () => {
    expect(countingValleys(8, 'UDDDUDUU')).toBe(1)
  })

  it('should return no valley', () => {
    expect(countingValleys(2, 'UD')).toBe(0)
  })
})
