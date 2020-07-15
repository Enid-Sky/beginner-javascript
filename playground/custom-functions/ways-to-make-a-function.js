/* A NON FUnction but is an ANONUMOUS FUNCTION */

// function (firstname) {
//   return `Dr. ${firstname}`;
//

/* Function Expression */
// define a function inside of a variable.
// We took an anonymous function and stuck it into a variable
// storing function as a variable!
// now we can pass the value around to other functions.
// Not hoisted, can't call the function before it's defined.

// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };
// // console.log(doctorize('Enid'));

// /*REGULAR HOISTED FUNCTION*/

// //it used the function keyword and given a function name.
// //can be called and run before defined
// console.log(doctorize2('enid'));

// function doctorize2(firstName) {
//   return `Dr. ${firstName}`;
// }

/* ARROW FUNCTIONS */
// concise syntax, they're shorter.
// they don't have their own scope related to the this keyword
// They ARE annonymous functions, must stick it into a variable

// // takes up a lot of lines
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }
// console.log(inchToCM('3'));

/* You can make it a tad shorter by returning the calculation */

// function inchesToCM2(inches) {
//   return inches * 2.54;
// }

// console.log(inchesToCM2(4));

// /* MAKING AN ARROW FUNCTION */

// // 1. turn you function into an annoymous function, stick it in a variable
// /* eslint-disable */
// const inchesToCM3 = function(inches) {
//   return inches * 2.54;
// }

// //2. remove the function keyword
// //3. add a fat arrow on the other side of the parenthesis

// const inchesToCM4 = (inches) => {
//   return inches * 2.54;//explicit return
// };

// //4. remove curly brackets and return keyword, to make it an implicit return

// const inchesToCM5 = (inches) =>  inches * 2.54;

// //5. if there is only one param, you can remove the parenthesis

// const inchesToCM6 = inches =>  inches * 2.54;

/* Another example */

// original function
// function add(a, b = 3) {
//   const total = a + b;
//   return total
// }
// //annonymous function

// const add = (a, b = 3) {
//   const total = a + b;
//   return total;
// }

// //remove variable for total and add fat arrow
// const add = (a, b = 3) => {
//   return a + b;
// }

// let add = (a, b = 3) => a + b;

/* RETURNING AN OBJECT */

// THE LONG WAY, BUT READABLE, PROBABLY THE BEST WAY FOR THIS

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// ALSO READABLE BUT A FUNCTION EXPRESSION, not hoisted

// const makeABaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// };

/* STRAIGHT UP ARROW FUNCTION, BUT NOT VERY READABLE */

// objects can go on one line
// remove return keyword and wrap in parenthesis
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

/* IIFE */
// Immediately Invoked Function Expression
// parenthesis run first, so wrap function around parenthesis
// what's the benefit? popular before we had block scope.

// literally runs immediately
// (function() {
//   console.log('Running the ANON function');
//   return 'You are cool';
// })();

// // add a parameter and arguement

// (function(age) {
//   return `You are cool at the age of ${age}`;
// })(10);

/* METHODS */

// a function that lives inside of an object
// example: console is the object, and log is the function

// const person = {
//   name: 'Amy Anderson',
//   // method
//   sayHi() {
//     console.log(this);
//     console.log(`Hey ${this.name}`);
//     console.log('Hey Amy!');
//     return 'Hey Amy';
//   },

//   // short hand method
//   yellHi() {
//     console.log(`Hey ${this.name}`);
//     console.log('Hey Wesssss');
//     return 'Hey Amy';
//   },

//   /*eslint-disable */
//   //arrow functions take the parent scope, which in this case is the window. Like saying window.name, instead of person.name.

//   whisperHi: () => {
//     console.log(this);
//     console.log("hiii wess i'm a mouse");

//   },
// };

// //another example of this not working with arrow functiosn
// //adds one to the score, everytime we call the function teamA.score()

// const teamA = {
//   points: 23,
//   score: function() {
//     this.points++;
//   }
// }

// //however this arrow function will not work. score will remain at 23 because "this" is the window.
// const teamB = {
//   points:23,
//   score: () => {
//     console.log(this);
//     this.points++;
//   }
// }

/* CALL BACK FUNCTIONS */

// click callback function when clicking a button

// const button = document.querySelector('.clickMe');

// function handleClick() {
//   console.log('clicked');
// }
// button.addEventListener('click', handleClick);

// submit button example
const mybutton = document.querySelector('.submit');

function handleSubmit() {
  console.log('submitted');
}
mybutton.addEventListener('click', handleSubmit);

// Timer callback

// set timeout takes 2 params, function and duration in milliseconds

// annonymous way
setTimeout(function() {
  console.log(`done, time to eat`);
}, 2000);

// arrow way
setTimeout(() => {
  console.log(`done for realz`);
}, 3000);
