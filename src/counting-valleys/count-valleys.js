// https://www.hackerrank.com/challenges/counting-valleys/problem

const countingValleys = (steps, path) => {
  let countValley = 0
  let seaLevel = 0

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      seaLevel++
      if (seaLevel === 0) {
        countValley++
      }
    } else {
      seaLevel--
    }
  }
  return countValley
}

export { countingValleys }
