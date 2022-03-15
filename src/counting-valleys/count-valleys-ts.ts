const countingValleys = (steps: number, path: string): number => {
  let countValley = 0
  let seaLevel = 0

  const pathArray = path.split('')
  pathArray.forEach((step) => {
    seaLevel = step === 'U' ? seaLevel + 1 : seaLevel - 1
    if (seaLevel === 0) {
      countValley++
    }
  })
  return countValley
}

export { countingValleys }
