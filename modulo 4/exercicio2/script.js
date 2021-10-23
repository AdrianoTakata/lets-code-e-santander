const elInput = document.querySelector('input');
const elButton = document.querySelector('button');
const elList = document.querySelector('ol');

elButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const textInput = elInput.value;
    // solução 1
    // if (textInput){
    //     elList.innerHTML = elList.innerHTML + `<li> ${textInput} </li>`;
    // }
    
    // Solução 2
    if (textInput.trim()) {
        const item = document.createElement('li');
        item.innerText = textInput
        elList.append(item);
    }
    elInput.value = '';
})


elInput.focus();
