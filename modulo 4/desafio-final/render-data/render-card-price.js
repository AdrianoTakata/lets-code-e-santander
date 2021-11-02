function renderPrice(price, typeHome, condoFee, divInfoPrice) {

  const divPrice = document.createElement('div');
  const paragraphPrice = document.createElement('p');
  paragraphPrice.classList.add('paragraph-price');
  paragraphPrice.innerText = `R$ ${price}`;
  divPrice.append(paragraphPrice)

  if (typeHome === 'APARTMENT') {
    const paragraphCondoFee = document.createElement('p');
    paragraphCondoFee.classList.add('paragraph-condo-fee');
    const spanCondeFee = document.createElement('span');
    spanCondeFee.innerText = `R$ ${condoFee}`;
    paragraphCondoFee.append('Condomínio: ', spanCondeFee);
    divPrice.append(paragraphCondoFee);
  }

  divInfoPrice.append(divPrice);

}



export default renderPrice;