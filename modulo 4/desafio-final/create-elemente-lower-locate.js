function createElementLowerLocate(containerLocate, nameCityReal, nameStateReal) {

  const buttonEl = document.createElement('button');
  buttonEl.classList.add('button-lower-locate');
  const text = `${nameCityReal} - ${nameStateReal} `;
  const spanEl = document.createElement('span');
  spanEl.innerText = 'x';
  buttonEl.append(text, spanEl)
  containerLocate.append(buttonEl);
}

export default createElementLowerLocate;