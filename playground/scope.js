/*eslint-disable */
/*Let and Const Variables are Block Scoped and Var variables are function scoped, and that answers where they are available to you.*/

/*SCOPE ISSUES */
// function isCool(name) {
//   if (name === 'Enid') {
//     let cool = true; //only available in this function scope, no the outer function.
//   }
//   console.log(cool);//this will not work
//   return cool;
// }

//To get around the issue above

function isCool(name) {
  let cool;//do not add the value
  if (name === 'Enid') {
    cool = true; //assign the value inside the function brackets here
  }
  console.log(cool);//available outside the function 
  return cool;
}

//if you search for i in the console it will give you 10, var leakes out 
for(var i = 0; i < 10; i++) {
  console.log(i);
}

//if you search for i in the console it will be undefined
for(let i = 0; i < 10; i++) {
  console.log(i);
}

//Is this going to log sunny of is this going to log snickers? 
const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';//locally scoped variable called sunny
  logDog()// there is no value here, and the function is defined not here, but above. And the variable dog is defined there. 
}

go();
//the output is: snickers.
//keep in mind JS is a lexically or static scoped language, meaning, the way scope lookup happens is where they are defined, not run.

/*PART 2 */

//ideally you wouldn't even want to go outside the function to look up the global variable. 

const dog = 'snickers';

function logDog(dog) {//add dog param here
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog('Ruffus')// feed it the arguement right away here.
}

go();

//the output is: Ruffus.
//the value is immediately available, it doesn't even have to look at where the function is defined or look outside the scope. 
//why? when a function takes in an arguement it will make local variables inside there named whatever you named the parameter.

/*The tricky part */

const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog(dog)
}

go();

//The output here will: Sunny
//Go doesn't care the name of the variable you pass in, it just cares about the value you pass in.

//reusing variable names like this is a recipe for disaster. 
//global variables are bad. Don't do it. Too confusing. When we get into modules, you can't even do this. Unless you attach the window with the module. 


//*FUNCTION SCOPING*/

//functions are scoped the exact same as variables.
//Functions are scoped to the parent function. 
//If you create one function inside another function, that function will only be available inside of that. 

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase())
  }
  yell();//does work
}

 yell();//does not work




