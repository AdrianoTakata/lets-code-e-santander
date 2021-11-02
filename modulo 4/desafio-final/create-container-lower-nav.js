function createContainerLowerNav(navRightSide, nameCityReal, nameStateReal, totalCount) {
  const divContainerRightSide = document.createElement('div');
  divContainerRightSide.classList.add('container-lower-nav');
  console.log(totalCount)
  const span = document.createElement('span');
  span.innerText = `${totalCount}`;
  const text = ` Imóveis a venda em ${nameCityReal} - ${nameStateReal}`;
  const paragraph = document.createElement('p');
  
  const button = document.createElement('button');
  button.innerText = `${nameCityReal} - ${nameStateReal}`;
  const span2 = document.createElement('span');
  span2.innerText = 'x';

  paragraph.append(span, text);
  button.append(span2);
  divContainerRightSide.append(paragraph, button);
  navRightSide.append(divContainerRightSide);
}

export default createContainerLowerNav;