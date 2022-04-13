export default function hurdleRace(k: number, height: number[]): number | null {
  if (height.length === 0) {
    return null
  }
  const maxHurdle = Math.max(...height)
  const magicPotions = maxHurdle - k

  return magicPotions > 0 ? magicPotions : 0
}
