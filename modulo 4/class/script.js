const listTag = document.getElementsByTagName('li');
console.log(listTag);


// NodeList can't use the map, filter and reduce functions.
const listQuery = document.querySelectorAll('li');
console.log(listQuery);

// However, you can use the spred to convert the NodeList to Array
// Now, you can use the map, filter, reduce and other functions
const listQueryArray = [...document.querySelectorAll('li')];
console.log(listQueryArray);

const pElement = document.querySelector('#texto-x');
pElement.innerText = "Olá!!!!";

const text = document.createTextNode("Hello");
const p = document.createElement('p');
p.appendChild(text);

const div = document.createElement('div')
document.body.append(div)
div.appendChild(p);
div.remove(p);

const button = document.querySelector('#btn');
button.addEventListener('click', function() {
    console.log('click');
})


const link = document.querySelector('a');
link.addEventListener('click', evt => {
    const ok = confirm('deseja sair?');
    if (!ok) evt.preventDefault();
});