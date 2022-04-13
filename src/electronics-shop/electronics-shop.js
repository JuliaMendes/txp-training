// https://www.hackerrank.com/challenges/electronics-shop/problem

export function getMoneySpent(keyboards, drives, b) {
  const purchasePossibilities = []
  for(let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if(keyboards[i] + drives[j] <= b) {
        purchasePossibilities.push(keyboards[i] + drives[j])
      }
    }
  }

  if (purchasePossibilities.length != 0) {
    const mostExpensivePurchase = Math.max(...purchasePossibilities)
    return mostExpensivePurchase
  } else {
    return -1
  }
}
