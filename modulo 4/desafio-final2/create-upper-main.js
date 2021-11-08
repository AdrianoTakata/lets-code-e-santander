function createUpperMainText(mainEl, nameStateReal, nameCityReal) {
  const divContainer = document.createElement('div');
  divContainer.classList.add("container-upper")
  const paragraphUpper = document.createElement('p');
  paragraphUpper.innerHTML = `Viva &middot; Venda  &middot;  ${nameStateReal}  &middot;  Imóveis à venda em ${nameCityReal}`;
  divContainer.append(paragraphUpper);
  mainEl.prepend(divContainer);
}

export default createUpperMainText;