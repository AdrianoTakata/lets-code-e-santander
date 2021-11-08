import clearScreen from "./clearScreen.js";

function createContainerLowerNav(navRightSide, nameCityReal, nameStateReal, totalCount) {
  
  const divContainerRightSide = document.createElement('div');
  divContainerRightSide.classList.add('container-lower-nav');
  const span = document.createElement('span');
  span.innerText = `${totalCount}`;
  const text = ` Imóveis a venda em ${nameCityReal} - ${nameStateReal}`;
  const paragraph = document.createElement('p');
  
  const buttonEl = document.createElement('button');
  buttonEl.innerText = `${nameCityReal} - ${nameStateReal}`;
  const span2 = document.createElement('span');
  span2.innerText = 'x';

  paragraph.append(span, text);
  buttonEl.append(span2);
  divContainerRightSide.append(paragraph, buttonEl);
  navRightSide.append(divContainerRightSide);

  buttonEl.addEventListener('click', clearScreen);
}

export default createContainerLowerNav;