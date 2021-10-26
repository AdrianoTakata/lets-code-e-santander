const pokemonName = ['zapdos', 'moltres', 'articuno'];

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
  const pokemonPromises = pokemonName.map( (pokemon) => {
    return getPokemonInfo(pokemon);
  })
  const pokemons = await Promise.all(pokemonPromises)
  console.log(pokemons)
  const pokemonsStatus = pokemons.map( (pokemon) => {
    console.log( pokemon['stats'])
  },)

}

init()