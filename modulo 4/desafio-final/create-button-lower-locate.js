import clearScreen from "./clearScreen.js";

function createButtonLowerLocate(containerLocate, nameCityReal, nameStateReal) {

  const buttonEl = document.createElement('button');
  buttonEl.classList.add('button-lower-locate');
  const text = `${nameCityReal} - ${nameStateReal} `;
  const spanEl = document.createElement('span');
  spanEl.innerText = 'x';
  buttonEl.append(text, spanEl)
  containerLocate.append(buttonEl);

  buttonEl.addEventListener('click', clearScreen);
}

// function clearScreen() {
  
//   const divMainCard = document.querySelector('.container-cards');
//   if (divMainCard) divMainCard.remove();

//   const buttonLowerLocate = document.querySelector('.button-lower-locate')
//   if (buttonLowerLocate) buttonLowerLocate.remove();

//   const divContainerUpper = document.querySelector('.container-upper')
//   if (divContainerUpper) divContainerUpper.remove();

//   const divContainerLowerNav = document.querySelector('.container-lower-nav')
//   if (divContainerLowerNav) divContainerLowerNav.remove();
// }

export default createButtonLowerLocate;