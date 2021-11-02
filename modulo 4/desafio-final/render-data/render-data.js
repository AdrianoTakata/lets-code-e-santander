import renderButton from "./render-card-button.js";
import renderPrice from "./render-card-price.js";
import renderInfo from "./render-card-info.js";

function renderData(dataHome, rightSide) {

  const divMain = document.createElement("div");
  divMain.classList.add('container-cards');
  rightSide.append(divMain);

  dataHome.forEach((home) => {

    // get and build some data
    const address = `${home['link']['data']['street']}, ${home['link']['data']['streetNumber']} - ${home['link']['data']['neighborhood']}, ${home['link']['data']['city']} - ${home['listing']['address']['stateAcronym']}`;
    const title = home['link']['name'];
    const urlImg = home['medias'][0]['url'];
    const typeHome = home['listing']['unitTypes'][0];
    let price = home['listing']['pricingInfos'][0]['price'];
    price = parseInt(price).toLocaleString();
  
    let condoFee = '--';
    if (Object.keys(home['listing']['pricingInfos'][0]).indexOf('monthlyCondoFee') >= 0) {
      condoFee = home['listing']['pricingInfos'][0]['monthlyCondoFee'];
      condoFee = parseInt(condoFee).toLocaleString();
    }

    // create the card
    const divCard = document.createElement('div');
    divCard.classList.add('container-card')
    divMain.append(divCard);

    // push he image
    const img = document.createElement('img');
    img.src = urlImg;
    divCard.append(img);

    // div card info
    const divInfo = document.createElement('div');
    divInfo.classList.add('container-card-info');
    divCard.append(divInfo);

    // div card info upper --> Informations and details about home
    renderInfo(home, address, title, divInfo);
    
    // div card info lower --> Information about price
    const divInfoPrice = document.createElement('div');
    divInfoPrice.classList.add('container-card-info-price');
    divInfo.append(divInfoPrice);

    renderPrice(price, typeHome, condoFee, divInfoPrice);

    // create the button telefone and enviar mensagem
    renderButton(divInfoPrice, divCard);

  })
}

export default renderData;