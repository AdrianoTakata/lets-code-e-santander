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
  
  function getPokemonPromise() {
    return pokemonName.map( (pokemon) => {
      return fetchJson(url, pokemon)
    })
  }
  
  
  // function run() {
  //   let pokemonPromise = getPokemonPromise();
  //   Promise.all(pokemonPromise).then( data => {
  //       let pokemons = data.reduce( (acc, value) => {
  //           let tipo = value["types"][0]["type"]["name"];
  //           let namePokemon = value["name"];
  //           return {...acc, [tipo]: acc[tipo].concat(namePokemon)}
  //       },{fire: [], electric: [], water: [], grass: []})
  //       console.log(pokemons)
  //   })
  // }

  function run() {
    let pokemonPromise = getPokemonPromise();
    Promise.all(pokemonPromise).then( (data) => {
      let pokemons = data.reduce( (acc, value) => {
        let tipo = value["types"][0]["type"]["name"];
        let namePokemon = value["name"];
        if ( Object.keys(acc).indexOf(tipo) === -1 ){
          console.log(acc)
          console.log(tipo)
          console.log(namePokemon)
          acc = {...acc, [tipo]: []}
          return {...acc, [tipo]: acc[tipo].concat(namePokemon)}
        }
        console.log(acc)
          console.log(tipo)
          console.log(namePokemon)
          return {...acc, [tipo]: acc[tipo].concat(namePokemon)}
        },{})
      console.log(pokemons)
    })
  }
  
  run();