import hurdleRace from './the-hurdle-race-ts'

describe('hurdle race', () => {
  it('should return number of magic potions to overcome hurdles', () => {
   const magicPotions = hurdleRace(2, [1, 2, 5, 1, 2])

   expect(magicPotions).toBe(3)
  })
  it('should return 0 when no magic potions are needed', () => {
    const magicPotions = hurdleRace(5, [3, 2, 5, 5, 2])

    expect(magicPotions).toBe(0)
   })
   it('should return null when hurdle height is empty', () => {
    const magicPotions = hurdleRace(5, [])
    
    expect(magicPotions).toBeNull()
   })
})