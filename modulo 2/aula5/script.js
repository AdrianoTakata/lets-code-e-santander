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