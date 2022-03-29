// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

export function bonAppetit(bill: number[], k: number, b: number) {
  bill.splice(k, 1)

  const count = bill.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const division = count / 2

  if (division === b) {
    console.log('Bon Appetit')
  } else {
    const pay = b - division
    console.log(pay)
  }
}
