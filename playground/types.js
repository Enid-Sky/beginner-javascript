/* WORKING WITH STRINGS */

// const sentence = 'shes so cool\\';
// const sentence2 = `she's so cool`;
// console.log(sentence, sentence2)

/* BACKTICKS ARE HELPFUL TO CREATE HTML */

// const name = 'Enid';
// const html = `
// <div>
// <h2>My name is ${name}.</h2>
// <p>I am ${5 + 30} years old</p>
// </div>
// `;
// document.body.innerHTML = html;

/* WORKING WITH MATH and MODULO */
// const treats = 40;
// const dogs = 3;
// const eachDogGets = Math.floor(treats / dogs);
// console.log(`each dog gets ${eachDogGets}`);
// const leftover = `We have ${treats % dogs} left`;
// console.log(leftover);

/* FLOATING POINTS */
//   const float = 0.1 + 0.2;
//   console.log(float);
// //for prices it's easier to just use cents, insteaf of dollar signs and decimals for cents
//   const price = 1034

// OBJECTS
// used for collections, arrays are also objects
// const person = {
//   first: 'Enid',
//   last: 'Svymbersky',
//   age: 100,
// };

/* UNDEFINED */

// // comes about when you try to access a variable created but not set, or just not there
// let dog;
// console.log(dog); // undefined

// //does cher have a last name? Looking for last will be undefined.

// conts cher = {
//   first: 'cher'
// }

// /* NULL */

// // A value of nothing. Has a value, but of nothing
// const somethingNull = null; // nothing on purpose

// //Teller from Penn and Teller officially has no last name.
// const teller = {
//   first: 'Raymond',
//   last: 'Teller',
// };

// //This is what he did:
// teller.first = 'Teller';
// teller.last = null;

/* Booleans */

// true or false, like a light switch it's on or off

// If ou want to know if the user is currently moving their mouse and if they are currently clicked down or up, you can use if else statements.

const isDrawing = false; // click down we say it's true, when they click up we say it's false.
const age = 18;
const ofAge = age > 19;
console.log(ofAge);

age === 18;
