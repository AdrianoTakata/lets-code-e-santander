const pokemonName = [
    "charmander",
    "charizard",
    "pikachu",
    "raichu",
    "squirtle",
    "blastoise",
    "bulbasaur",
    "venusaur"
  ];
  
url = "https://pokeapi.co/api/v2/pokemon/";
  
function fetchJson(url, pokemon) {
  return fetch(url + pokemon).then((r) => {
    return r.json();
  });
}
  

  // function getPokemonInformation() {
    
  //   let obj = {fire: [], electric:[], water: [], grass: []}
  //   pokemonName.map( (pokemon) => {
  //     fetchJson(url, pokemon).then( (data) => { 
  //       let tipo = data["types"][0]["type"]["name"]
  //       console.log(tipo)
  //       console.log(pokemon)
  //       obj[tipo].push(pokemon)
  //       console.log(obj)   
  //     })
  //   })


  // }

  // getPokemonInformation()

function getPokemonInformation() {
  let obj = {fire: [], electric:[], water: [], grass: []}
  pokemonName.map( (pokemon) => {
    fetchJson(url, pokemon).then( ({types}) => {
        const seila = types.reduce( (acc, value) => {
        let tipo = value["type"]["name"]
        return {...acc, ...[tipo]}
      },{})
      console.log(seila)
    })
  })
}

getPokemonInformation()

function getPokemonPromise() {
  return pokemonName.map( (pokemon) => {
    return fetchJson(url, pokemon)
  })
}

// Solution 1
function run1() {
  let pokemonPromise = getPokemonPromise();
  Promise.all(pokemonPromise).then( data => {
      let pokemons = data.reduce( (acc, value) => {
          let tipo = value["types"][0]["type"]["name"];
          let namePokemon = value["name"];
          return {...acc, [tipo]: acc[tipo].concat(namePokemon)}
      },{fire: [], electric: [], water: [], grass: []})
      console.log(pokemons)
  })
}

run1();

// Solution 2

function run2() {
  let pokemonPromise = getPokemonPromise();
  Promise.all(pokemonPromise).then( (data) => {
    let pokemons = data.reduce( (acc, value) => {
      let tipo = value["types"][0]["type"]["name"];
      let namePokemon = value["name"];
      if ( Object.keys(acc).indexOf(tipo) === -1 ){
        acc = {...acc, [tipo]: []}
        return {...acc, [tipo]: acc[tipo].concat(namePokemon)}
      }
      return {...acc, [tipo]: acc[tipo].concat(namePokemon)}
      },{})
    console.log(pokemons)
  })
}

run2();