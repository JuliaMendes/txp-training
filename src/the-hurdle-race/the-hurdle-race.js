export default function hurdleRace(k, height) {
  if (height.length === 0) {
    return null;
  }
  const maxHurdle = Math.max(...height);

  if (maxHurdle - k > 0) {
    return maxHurdle - k;
  } else {
    return 0;
  }
}
