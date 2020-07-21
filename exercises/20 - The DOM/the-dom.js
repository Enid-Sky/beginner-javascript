// before working with the elements on the page, you need to go get them by selecting them.

// Then we can do whatever we want with it (listen for clicks, remove the content, change the content, ect.)

// query for one or query for all elements
const p = document.querySelector('p');
console.log(p);

const divs = document.querySelectorAll('div');
console.log(divs);

// can select children like you do in css
const item1 = document.querySelector('.items p');
console.log(item1);

const item2 = document.querySelector('.sub p');
console.log(item2);

// you can also look inside of querySelector
