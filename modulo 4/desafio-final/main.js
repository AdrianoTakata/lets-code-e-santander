import fetchJson from "./http.js";
import searchState from "./search-state.js";
import filterCity from "./filter-city.js";
import createUpperMainText from "./create-upper-main.js";
import createButtonLowerLocate from "./create-button-lower-locate.js";
import createContainerLowerNav from "./create-container-lower-nav.js";
import renderData from "./render-data/render-data.js"
import clearScreen from "./clearScreen.js";


const locate = document.querySelector(".input-locate");
const mainEl = document.querySelector("main");
const containerLocate = document.querySelector(".container-locate");
const rightSide = document.querySelector(".right-side");
const navRightSide = document.querySelector(".nav-right-side");


function init() {

  locate.addEventListener('blur', getCity);

}

init();

async function getCity(evt) {
  const cityIn = evt.target.value;

  if (cityIn.trim()) {
    const [nameCityQuery, nameCityReal] = filterCity(cityIn);

    const [nameStateReal, nameStateQuery] = searchState(nameCityReal);

    const url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${nameStateQuery}&city=${nameCityQuery}`;

    const dataSearch = await fetchJson(url)
    const totalCount = dataSearch['search']['totalCount']
    const dataHome = dataSearch['search']['result']['listings'];

    // clear
    clearScreen();

    // upper main
    createUpperMainText(mainEl, nameStateReal, nameCityReal);

    // lower locate
    createButtonLowerLocate(containerLocate, nameCityReal, nameStateReal)


    // lower nav-right-side
    createContainerLowerNav(navRightSide, nameCityReal, nameStateReal, totalCount);

    // render the cards about the home
    renderData(dataHome, rightSide);

  }
  locate.value = '';
}




