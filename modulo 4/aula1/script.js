const elementById = document.getElementById('text');
console.log(elementById);

const elementByClass = document.getElementsByClassName('first');
console.log(elementByClass);

const elementByTag = document.getElementsByTagName('div');
console.log(elementByTag);

const querySelect = document.querySelector('div');
const querySelect2 = document.querySelector('.first');
const querySelect3 = document.querySelector('#text');
console.log(querySelect);
console.log(querySelect2);
console.log(querySelect3);

const selectAll = document.querySelectorAll('div');
console.log(selectAll)

const divContainer = document.querySelector('.container');
console.log(divContainer);

const paragraph = document.createElement('p');
paragraph.innerText = "Hello World";

paragraph.classList.add('bold_paragraph');
//paragraph.classList.remove() --> remove the class in css
// paragraph.classList.toggle() --> 
console.log(paragraph);

divContainer.append(paragraph);