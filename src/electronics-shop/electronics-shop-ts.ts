// https://www.hackerrank.com/challenges/electronics-shop/problem

export function getMoneySpent(keyboards: number[], drives: number[], b: number): number {
  const purchasePossibilities: number[] = []
  keyboards.forEach((k) => {
    drives.forEach((d) => {
      if (k + d <= b) {
        purchasePossibilities.push(k + d)
      }
    })
  })

  const mostExpensivePurchase = purchasePossibilities.length != 0
    ? Math.max(...purchasePossibilities) : -1
  return mostExpensivePurchase
}
