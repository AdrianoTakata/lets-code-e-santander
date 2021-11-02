//const pokemonName = ['zapdos', 'moltres', 'articuno'];
//const pokemonName = ['bulbasaur', 'charmander', 'squirtle'];
//const pokemonName = ['ivysaur', 'charmeleon', 'wartortle'];
//const pokemonName = ['venusaur', 'charizard', 'blastoise'];
//const pokemonName = ['vaporeon', 'jolteon', 'flareon'];
const pokemonName = ['raikou', 'entei', 'suicune'];




const attributes = ['Life', 'Attack', 'Defense', 'Speed'];


const mainContainer = document.querySelector('.main-container');
const selectEl = document.querySelector('select');
const buttonEl = document.querySelector('button');
let pokemons = [];

urlBase = 'https://pokeapi.co/api/v2/pokemon/';

async function fecthJson(pokemon) {
  const response = await fetch(urlBase + pokemon);
  return await response.json();
}

async function getPokemonInfo(pokemon) {
  const pokemonInfo = await fecthJson(pokemon);
  return pokemonInfo;
}


async function init() {
  const pokemonPromises = pokemonName.map((pokemon) => {
    return getPokemonInfo(pokemon);
  })
  pokemons = await Promise.all(pokemonPromises)
  pokemons = organizeInfoPokemons();
  renderData();
  renderAttribute();
  buttonEl.addEventListener('click', winTheGame)
}

init();

function organizeInfoPokemons() {
  const pokemonsInfo = pokemons.reduce((acc, pokemon) => {
    return [...acc, {
      name: pokemon['forms'][0]['name'],
      life: pokemon['stats'][0]['base_stat'],
      attack: pokemon['stats'][1]['base_stat'],
      defense: pokemon['stats'][2]['base_stat'],
      speed: pokemon['stats'][5]['base_stat'],
      img: pokemon['sprites']['other']['dream_world']['front_default'],
      type: pokemon['types'][0]['type']['name'],
    }]
  }, [])
  return pokemonsInfo;
}

function renderData() {

  pokemons.forEach((pokemon, index) => {
    let divCard = document.createElement('div')
    divCard.classList.add(`card-pokemon${index}`);
    let figPokemon = document.createElement('figure');
    let imgPokemon = document.createElement('img');
    const urlImage = pokemon['img'];
    imgPokemon.src = urlImage;
    figPokemon.append(imgPokemon);
    divCard.append(figPokemon);
    mainContainer.appendChild(divCard);


    let listEl = document.createElement('ul');
    addLi(listEl, divCard, pokemon, 'life');
    addLi(listEl, divCard, pokemon, 'attack');
    addLi(listEl, divCard, pokemon, 'defense');
    addLi(listEl, divCard, pokemon, 'speed');


    let typeColor = pokemon['type']
    changeBackgroundColor(divCard, typeColor)

    
  });
}

function addLi(listEl, divCard, pokemon, attribute) {
  let liAttribute = document.createElement('li');
  let valueAttribute = pokemon[attribute];
  liAttribute.innerHTML = `${attribute[0].toUpperCase()+attribute.slice(1)} <span> ${valueAttribute} </span>`
  listEl.append(liAttribute);
  divCard.append(listEl);
}

function changeBackgroundColor(divCard, typeColor) {
  switch (typeColor) {
    case 'electric':
      divCard.classList.add('electric');
      break;
    case 'fire':
      divCard.classList.add('fire');
      break;
    case 'ice':
      divCard.classList.add('ice');
      break;
      case 'water':
        divCard.classList.add('water');
        break;
        case 'grass':
          divCard.classList.add('grass');
          break;
    default:
      divCard.classList.add('default');
  }
}

function renderAttribute() {
  attributes.forEach((attribute) => {
    const option = document.createElement('option');
    option.textContent = attribute;
    // console.log(option)
    selectEl.append(option);
  });
}

function winTheGame() {
  // Get the value select by user
  let attribute = selectEl.value;

  // convert the first letter in lowerCase
  attribute = attribute[0].toLowerCase() + attribute.slice(1);

  // Get the value of the attribute
  const attributePokemons = pokemons.map((pokemon) => {
    return pokemon[`${attribute}`]
  })

  // Get the maximum value of attributePokemons
  const maxValue = Math.max(...attributePokemons);

  // Create the array with index where the value is minor the maxValue
  const indexMinValue = attributePokemons.reduce((acc, value, index) => {
    if (maxValue !== value) {
      return [...acc, index];
    }
    return acc;
  }, [])

  // Remove the second class with repect the indexMinValue
  if (indexMinValue.length) {
    indexMinValue.forEach((item) => {
      const divPokemon = document.querySelector(`.card-pokemon${item}`);
      const classPokemon = divPokemon.classList;
      divPokemon.classList.remove(`${classPokemon[1]}`)
    })
  }

  buttonEl.classList.toggle('button-toggle');

}
