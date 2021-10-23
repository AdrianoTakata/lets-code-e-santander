// Eventos
// Relacionados ao componente, ao teclado, ao mouse, ao <form>
// focus, blur, input, change
// keydown, keypress, keyup
// click

const testingInput = document.querySelector('input[name=testing]')
console.log(testingInput);

// testingInput.addEventListener('focus', (evt) => {
//     console.log(evt.target.value); 
// });

// testingInput.addEventListener('blur', (evt) => {
//     console.log(evt); //blur usado para password
// });

// testingInput.addEventListener('input', (evt) => {
//     console.log(evt.target.value); 
// });

// testingInput.addEventListener('change', (evt) => {
//     console.log(evt); 
// });

// document.addEventListener('keydown', evt => {
//     console.log(evt);
// })

// document.addEventListener('keyup', evt => {
//     console.log(evt);
// })


// document.addEventListener('keypress', evt => {
//     console.log(evt);
// })

// const button = document.querySelector('button');
// button.addEventListener('click', (evt) => {
//     //evt.preventDefault();
//     //evt.stopPropagation();
//     console.log('Click')
// })

// const div = document.querySelector('div');
// div.addEventListener('click', (evt) => {
//     //evt.preventDefault();
//     console.log('Click na div')
// })

// const form = document.querySelector('form');
// addEventListener('submit', evt => {
//     evt.preventDefault();
//    console.log(evt) 
// });