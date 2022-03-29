// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

export function bonAppetit(bill, k, b) {
  let count = 0
  let division = 0
  let pay = 0

  bill.splice(k, 1)

  for (let i = 0; i < bill.length; i++) {
    count += bill[i]
  }

  division = count / 2
  if (division === b) {
    console.log('Bon Appetit')
  } else {
    pay = b - division
    console.log(pay)
  }

}
