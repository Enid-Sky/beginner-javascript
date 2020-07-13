/* CALCULATE THE BILL */

// function calculateBill() {
//   // because of block scope, the total is only available in this function block
//   const actualTotal = 100 * 1.13;
//   const fixedTotal = actualTotal.toFixed(2);
//   console.log(actualTotal);
//   console.log(fixedTotal);
//   // we must return the total to be able to use the value
//   return fixedTotal;
// }

// // calculateBill(); instead of calling the function we need to capture it in a variable to extract the value

// // const myTotal = calculateBill();
// // console.log(`Your total is $${myTotal}`);

// /* OR */

// // run the function inside of the interpolated code
// console.log(`Your total is $${calculateBill()}`);

// Remember, we could use global variable (in a higher scope) for the bill and tax, but it's not great to reach outside of a function for a value, and rely on that.

/** ***************************** */

/* WORKING WITH PARAMETERS */
// function calculateBill(billAmount, taxRate) {
//   console.log(billAmount, taxRate);
//   const total = billAmount * (1 + taxRate);
//   return total;
// }
// // then pass the value with arguements.
// const myTotal = calculateBill(100, 1.13);
// const myTotal2 = calculateBill(200, 1.13);
// console.log(myTotal, myTotal2);

/* WORKING WITH VARIABLES */

// function sayHiTo(firstname) {
//   return `Hello, ${firstname}`;
// }

// const greeting = sayHiTo('Enid');
// console.log(greeting);
// //in the console we can use sayHiTo and pass in any arguement because it's undefined in console. Greeting however, is as above.

/* PASSING EXPRESSIONS */
// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function greeting(name) {
//   return `Hello, ${name.toUpperCase()}`;
// }

// const mixnmatch = greeting(doctorize('enid'));
// console.log(mixnmatch);

/* Default variables, it won't error out */
// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function greeting(name = 'Silly Goose') {
//   return `Hello, ${name.toUpperCase()}`;
// }

// const mixnmatch = greeting(doctorize('enid'));
// console.log(mixnmatch);

/* CALCULATE A BILL WITH TAX AND TIP RATE */

// function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
//   const total = billAmount + billAmount * taxRate + billAmount * tipRate;
//   console.log('running total');
//   return total;
// }

// // const myBill = calculateBill(100);
// console.log(calculateBill(100, undefined, 2.0));

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const myBill = billAmount + billAmount * taxRate + billAmount * tipRate;
  return myBill;
}
console.log(calculateBill(100));
