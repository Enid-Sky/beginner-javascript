/* CALCULATE THE BILL */
// We know the price of the meal (13.00), tax is 3.5%, the tip is 20% of the total bill,
// calculate the meal * 3.5 = total with tax, total with tax * 20% = tip
// easy example:
function calculateBill() {
  // because of block scope the total is only available in this function block
  const actualTotal = 100 * 1.13;
  const fixedTotal = actualTotal.toFixed(2);
  console.log(actualTotal);
  console.log(fixedTotal);
  // we must return the total to be able to use the value
  return fixedTotal;
}

// calculateBill(); instead of calling the function we need to capture it in a variable to extract the value

// const myTotal = calculateBill();
// console.log(`Your total is $${myTotal}`);

/* OR */

// run the function inside of the interpolated code
console.log(`Your total is $${calculateBill()}`);

/** ****************************************************** */

// not great to reach outside of a function for a value. Will look for global variables too.
const bill = 100;
