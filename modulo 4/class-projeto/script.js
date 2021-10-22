const elInput = document.querySelector('#entrada');
const elButton = document.querySelector('button');
const elLista = document.querySelector('ul');

const addItem = (list, input) => {
    const textInput = input.value;
    if (textInput) {
        list.innerHTML = `<li> ${textInput} <button> remover </button> </li>` + list.innerHTML;
    }
    elInput.value = "";
}

const addItemByButton = evt => {
    evt.preventDefault();
    addItem(elLista, elInput);
}

const addItemByEnter = evt => {
    evt.preventDefault();
    if (evt.keyCode === 13){
        addItem(elLista, elInput);
    }
}

const removeItem = evt => {
    if (evt.target.nodeName === "BUTTON") {
        const li = evt.target.parentNode;
        li.remove();
    }
}

elButton.addEventListener('click', addItemByButton);
elInput.addEventListener('keyPressed', addItemByEnter);
elLista.addEventListener('click', removeItem);

elInput.focus();

localStorage.setItem('volumePreferido', 7.5);

const cart = [
    { name: 'Star Wars Mug', price: 30.9 },
    { name: 'Star Trek Shirt', price: 29.9 }
];

localStorage.setItem('cart', JSON.stringify(cart));

sessionStorage.setItem('cart', JSON.stringify(cart));

const volumePreferido = localStorage.getItem('volumePreferido');
console.log(volumePreferido);

const cart2 = JSON.parse(localStorage.getItem('cart'));
console.log(cart2);
localStorage.clear();