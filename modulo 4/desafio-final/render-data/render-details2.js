function renderDetailsHome2(detailsHome, divInfo, divInfo1) {

  const ul = document.createElement('ul');
  ul.classList.add('list2')
  detailsHome.forEach((item) => {
    const li = document.createElement('li');
    switch (item) {
      case 'PARTY_HALL':
        li.innerText = "São de festa";
        break;
      case 'ELEVATOR':
        li.innerText = "Elevador";
        break;
      case 'GATED_COMMUNITY':
        li.innerText = "Condimínio fechado";
        break;
      case 'BARBECUE_GRILL':
        li.innerText = "Grelha de churrasco";
        break;
      case "GYM":
        li.innerText = "Acadêmia";
        break;
      case 'TENNIS_COURT':
        li.innerText = "Quadra de tênis";
        break;
      case 'LAUNDRY':
        li.innerText = "Lavanderia";
        break;
      case 'FURNISHED':
        li.innerText = 'Mobiliado';
        break;
      case 'FIREPLACE':
        li.innerText = "Lareira";
        break;
      case 'POOL':
        li.innerText = 'Piscina';
        break;
      case 'BICYCLES_PLACE':
        li.innerText = "Bicicletário";
        break;
      case 'AIR_CONDITIONING':
        li.innerText = "Ar condicionário";
        break;
      case 'PLAYGROUND':
        li.innerText = "Parque infantil";
        break;
      case 'SPORTS_COURT':
        li.innerText = "Quadra de esportes";
        break;
      case 'PETS_ALLOWED':
        li.innerText = "Permite animais";
        break;
      case 'AMERICAN_KITCHEN':
        li.innerText = "Cozinha americana";
        break;
      case 'ELECTRONIC_GATE':
        li.innerText = "Portão eletrônico";
        break;
      case 'CINEMA':
        li.innerText = "Cinema";
        break;
      case 'GARDEN':
        li.innerText = "Jardim";
        break;
      case 'SAUNA':
        li.innerText = "Sauna";
        break;
    }
    ul.appendChild(li);
    divInfo1.appendChild(ul);
    divInfo.append(divInfo1);
  })
}

export default renderDetailsHome2;