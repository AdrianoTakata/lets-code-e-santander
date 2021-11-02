function renderDetailsHome1(home, detailsHome, divInfo, divInfo1) {

  const ul = document.createElement('ul');
  ul.classList.add('list1')
  detailsHome.forEach((item) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const property = home['listing'][item][0];
    let quant = 0;
    switch (item) {
      case 'usableAreas':
        li.innerHTML = `<span> ${property} </span> m&sup2 `;
        break;
      case 'bedrooms':
        quant = property > 1 ? 'Quartos' : 'Quarto';
        span.innerText = `${property} `;
        li.append(span, `${quant}`);
        break;
      case 'bathrooms':
        quant = property > 1 ? 'Banheiros' : 'Banheiro';
        span.innerText = `${property} `;
        li.append(span, `${quant}`);
        break;
      case 'parkingSpaces':
        quant = property > 1 ? 'Vagas' : 'Vaga';
        span.innerText = `${property} `;
        li.append(span, `${quant}`);
        break;
    }
    ul.appendChild(li);
    divInfo1.appendChild(ul);
    divInfo.append(divInfo1);
  })
}

export default renderDetailsHome1;