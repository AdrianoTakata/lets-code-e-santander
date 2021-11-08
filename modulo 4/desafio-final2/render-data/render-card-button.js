function renderButton(divInfo2, divCard) {

  const divButton = document.createElement('div');
  divButton.classList.add('div-button');
  const buttonTel = document.createElement('button');
  buttonTel.innerText = "TELEFONE";
  buttonTel.classList.add('button-tel-msg');
  const buttonMsg = document.createElement('button');
  buttonMsg.innerText = "ENVIAR MENSAGEM"
  buttonMsg.classList.add('button-tel-msg');
  divButton.append(buttonTel, buttonMsg);
  buttonTel.style.display = 'none';
  buttonMsg.style.display = 'none';
  divInfo2.append(divButton);
  
  divCard.addEventListener('mouseover', function onMouseOver() {
    buttonTel.style.display = 'inline-block';
    buttonMsg.style.display = 'inline-block';
  })

  divCard.addEventListener('mouseout', function onMouseOut() {
    buttonTel.style.display = 'none'
    buttonMsg.style.display = 'none';
  })

}


export default renderButton;