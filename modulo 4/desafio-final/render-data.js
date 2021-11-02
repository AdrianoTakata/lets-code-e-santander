import renderDetailsHome1 from "./render-details1.js";
import renderDetailsHome2 from "./render-details2.js";

function renderData(dataHome, rightSide) {

  dataHome.forEach((home) => {

    // get and build some data
    const address = `${home['link']['data']['street']}, ${home['link']['data']['streetNumber']} - ${home['link']['data']['neighborhood']}, ${home['link']['data']['city']} - ${home['listing']['address']['stateAcronym']}`;
    const title = home['link']['name'];
    const urlImg = home['medias'][0]['url'];
    const price = home['listing']['pricingInfos'][0]['price'];
    const typeHome = home['listing']['unitTypes'][0];

    let condoFee = '--';
    if (Object.keys(home['listing']['pricingInfos'][0]).indexOf('monthlyCondoFee') >= 0) {
      condoFee = home['listing']['pricingInfos'][0]['monthlyCondoFee'];
    }

    // create the card
    const divCard = document.createElement('div');
    divCard.classList.add('container-card')
    rightSide.append(divCard);

    // push he image
    const img = document.createElement('img');
    img.src = urlImg;
    divCard.append(img);

    // div card info
    const divInfo = document.createElement('div');
    divInfo.classList.add('container-card-info');

    // div card info upper --> Informations and details about home
    const divInfo1 = document.createElement('div');
    divInfo1.classList.add('container-card-info-upper')
    divInfo.append(divInfo1);

    const paragraphLocate = document.createElement('p');
    paragraphLocate.classList.add('paragraph-locate');
    paragraphLocate.innerText = address;
    const paragraphTitle = document.createElement('p');
    paragraphTitle.classList.add('paragraph-title');
    paragraphTitle.innerText = title;

    divInfo1.append(paragraphLocate, paragraphTitle);

    const detailsHome1 = ['usableAreas', 'bedrooms', 'bathrooms', 'parkingSpaces'];
    renderDetailsHome1(home, detailsHome1, divInfo, divInfo1);

    const detailsHome2 = home['listing']['amenities'];
    if (detailsHome2.length) {
      renderDetailsHome2(detailsHome2, divInfo, divInfo1);
    }
    divCard.append(divInfo);

    // div card info lower --> Information about price

    const divInfo2 = document.createElement('div');
    divInfo2.classList.add('container-card-info-price');

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

    // create the button telefone and enviar mensagem
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
    divInfo2.append(divPrice, divButton);
    divInfo.append(divInfo2);

    rightSide.append(divCard);

    divCard.addEventListener('mouseover', function onMouseOver() {
      buttonMsg.style.display = 'inline';
      buttonTel.style.display = 'inline';
    })

    divCard.addEventListener('mouseout', function onMouseOut() {
      buttonMsg.style.display = 'none'
      buttonTel.style.display = 'none';
    })

  })
}

export default renderData;