import renderDetailsHome1 from "./render-details1.js";
import renderDetailsHome2 from "./render-details2.js";

function renderInfo(home, address, title, divInfo) {

  const divInfoDetail = document.createElement('div');
  divInfoDetail.classList.add('container-card-info-detail')

  const paragraphLocate = document.createElement('p');
  paragraphLocate.classList.add('paragraph-locate');
  paragraphLocate.innerText = address;
  const paragraphTitle = document.createElement('p');
  paragraphTitle.classList.add('paragraph-title');
  paragraphTitle.innerText = title;

  divInfoDetail.append(paragraphLocate, paragraphTitle);

  const detailsHome1 = ['usableAreas', 'bedrooms', 'bathrooms', 'parkingSpaces'];
  renderDetailsHome1(home, detailsHome1, divInfo, divInfoDetail);

  const detailsHome2 = home['listing']['amenities'];
  if (detailsHome2.length) {
    renderDetailsHome2(detailsHome2, divInfo, divInfoDetail);
  }

}

export default renderInfo;