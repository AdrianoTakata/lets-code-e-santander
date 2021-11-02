import fetchJson from "./http.js";
import searchState from "./search-state.js";
import filterCity from "./filter-city.js";
import buildUpperMainText from "./build-upper-main.js";
import createElementLowerLocate from "./create-elemente-lower-locate.js";
import createContainerLowerNav from "./create-container-lower-nav.js";
import renderData from "./render-data.js"


// url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=sp&city=rio-de-janeiro`
const locate = document.querySelector(".input-locate");
const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const containerLocate = document.querySelector(".container-locate");
const rightSide = document.querySelector(".right-side");
const navRightSide = document.querySelector(".nav-right-side");

console.log("Hello Wordl!")


function init() {

  locate.addEventListener('blur', getCity);

}

init();

async function getCity(evt) {
  const cityIn = evt.target.value;

  const [nameCityQuery, nameCityReal] = filterCity(cityIn);

  const [nameStateReal, nameStateQuery] = searchState(nameCityReal);

  const url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${nameStateQuery}&city=${nameCityQuery}`;
  console.log(url)

  const dataSearch = await fetchJson(url)
  const totalCount = dataSearch['search']['totalCount']
  const dataHome = dataSearch['search']['result']['listings'];

  // upper main
  buildUpperMainText(mainEl, nameStateReal, nameCityReal);

  // lower locate
  createElementLowerLocate(containerLocate, nameCityReal, nameStateReal)


  // lower nav-right-side
  createContainerLowerNav(navRightSide, nameCityReal, nameStateReal, totalCount);

  renderData(dataHome, rightSide);

}

// function renderData(dataHome) {

//   dataHome.forEach((home) => {


//     const address = `${home['link']['data']['street']}, ${home['link']['data']['streetNumber']} - ${home['link']['data']['neighborhood']}, ${home['link']['data']['city']} - ${home['listing']['address']['stateAcronym']}`;
//     const title = home['link']['name'];
//     const urlImg = home['medias'][0]['url'];
//     const price = home['listing']['pricingInfos'][0]['price'];
//     console.log(Object.keys(home['listing']['pricingInfos'][0]))
//     let condoFee = '--';
//     if (Object.keys(home['listing']['pricingInfos'][0]).indexOf('monthlyCondoFee') >= 0) {
//       condoFee = home['listing']['pricingInfos'][0]['monthlyCondoFee'];
//     }
//     console.log(condoFee);

//     const typeHome = home['listing']['unitTypes'][0];

//     const div = document.createElement('div');
//     div.classList.add('card')
//     rightSide.append(div);
//     const img = document.createElement('img');
//     img.src = urlImg;
//     div.append(img);

//     // // div info 1

//     const divInfo = document.createElement('div');
//     divInfo.classList.add('container-card-right')
//     const divInfo1 = document.createElement('div');
//     divInfo1.classList.add('container-div1')
//     divInfo.append(divInfo1);

//     const paragraphLocate = document.createElement('p');
//     paragraphLocate.classList.add('paragraph-locate');
//     paragraphLocate.innerText = address;
//     const paragraphTitle = document.createElement('p');
//     paragraphTitle.classList.add('paragraph-title');
//     paragraphTitle.innerText = title;

//     divInfo1.append(paragraphLocate, paragraphTitle);

//     const detailsHome1 = ['usableAreas', 'bedrooms', 'bathrooms', 'parkingSpaces'];
//     renderDetailsHome1(home, detailsHome1, divInfo, divInfo1);

//     const detailsHome2 = home['listing']['amenities'];
//     if (detailsHome2.length) {
//       renderDetailsHome2(detailsHome2, divInfo, divInfo1);
//     }
//     div.append(divInfo);



//     // div info 2 -> price

//     const divInfo2 = document.createElement('div');
//     divInfo2.classList.add('container-div2');

//     const divPrice = document.createElement('div');
//     const paragraphPrice = document.createElement('p');
//     paragraphPrice.classList.add('paragraph-price');
//     paragraphPrice.innerText = `R$ ${price}`;
//     divPrice.append(paragraphPrice)

//     if (typeHome === 'APARTMENT') {
//       const paragraphCondoFee = document.createElement('p');
//       paragraphCondoFee.classList.add('paragraph-condo-fee');
//       const spanCondeFee = document.createElement('span');
//       spanCondeFee.innerText = `R$ ${condoFee}`;
//       paragraphCondoFee.append('Condomínio: ', spanCondeFee);
//       divPrice.append(paragraphCondoFee);
//     }

//     const divButton = document.createElement('div');
//     divButton.classList.add('div-button');
//     const buttonTel = document.createElement('button');
//     buttonTel.innerText = "TELEFONE";
//     buttonTel.classList.add('button-tel-msg');
//     const buttonMsg = document.createElement('button');
//     buttonMsg.innerText = "ENVIAR MENSAGEM"
//     buttonMsg.classList.add('button-tel-msg');
//     divButton.append(buttonTel, buttonMsg);

//     divInfo2.append(divPrice, divButton);
//     divInfo.append(divInfo2);
//     // // 


//     // divInfo2.append(paragraphPrice);


//     // div.append(divInfo1);
//     // div.append(divInfo2);

//     rightSide.append(div);


//   })
// }


// function renderDetailsHome1(home, detailsHome, divInfo, divInfo1) {

//   const ul = document.createElement('ul');
//   ul.classList.add('list1')
//   detailsHome.forEach((item) => {
//     const li = document.createElement('li');
//     const span = document.createElement('span');
//     const property = home['listing'][item][0];
//     let quant = 0;
//     switch (item) {
//       case 'usableAreas':
//         li.innerHTML = `<span> ${property} </span> m&sup2 `;
//         break;
//       case 'bedrooms':
//         quant = property > 1 ? 'Quartos' : 'Quarto';
//         span.innerText = `${property} `;
//         li.append(span, `${quant}`);
//         break;
//       case 'bathrooms':
//         quant = property > 1 ? 'Banheiros' : 'Banheiro';
//         span.innerText = `${property} `;
//         li.append(span, `${quant}`);
//         break;
//       case 'parkingSpaces':
//         quant = property > 1 ? 'Vagas' : 'Vaga';
//         span.innerText = `${property} `;
//         li.append(span, `${quant}`);
//         break;
//     }
//     ul.appendChild(li);
//     divInfo1.appendChild(ul);
//     divInfo.append(divInfo1);
//   })
// }

// function renderDetailsHome2(detailsHome, divInfo, divInfo1) {

//   const ul = document.createElement('ul');
//   ul.classList.add('list2')
//   detailsHome.forEach((item) => {
//     const li = document.createElement('li');
//     switch (item) {
//       case 'PARTY_HALL':
//         li.innerText = "São de festa";
//         break;
//       case 'ELEVATOR':
//         li.innerText = "Elevador";
//         break;
//       case 'GATED_COMMUNITY':
//         li.innerText = "Condimínio fechado";
//         break;
//       case 'BARBECUE_GRILL':
//         li.innerText = "Grelha de churrasco";
//         break;
//       case "GYM":
//         li.innerText = "Acadêmia";
//         break;
//       case 'TENNIS_COURT':
//         li.innerText = "Quadra de tênis";
//         break;
//       case 'LAUNDRY':
//         li.innerText = "Lavanderia";
//         break;
//       case 'FURNISHED':
//         li.innerText = 'Mobiliado';
//         break;
//       case 'FIREPLACE':
//         li.innerText = "Lareira";
//         break;
//       case 'POOL':
//         li.innerText = 'Piscina';
//         break;
//       case 'BICYCLES_PLACE':
//         li.innerText = "Bicicletário";
//         break;
//       case 'AIR_CONDITIONING':
//         li.innerText = "Ar condicionário";
//         break;
//       case 'PLAYGROUND':
//         li.innerText = "Parque infantil";
//         break;
//       case 'SPORTS_COURT':
//         li.innerText = "Quadra de esportes";
//         break;
//       case 'PETS_ALLOWED':
//         li.innerText = "Permite animais";
//         break;
//       case 'AMERICAN_KITCHEN':
//         li.innerText = "Cozinha americana";
//         break;
//       case 'ELECTRONIC_GATE':
//         li.innerText = "Portão eletrônico";
//         break;
//       case 'CINEMA':
//         li.innerText = "Cinema";
//         break;
//       case 'GARDEN':
//         li.innerText = "Jardim";
//         break;
//       case 'SAUNA':
//         li.innerText = "Sauna";
//         break;
//     }
//     ul.appendChild(li);
//     divInfo1.appendChild(ul);
//     divInfo.append(divInfo1);
//   })
// }




