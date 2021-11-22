import { Component } from '@angular/core';
import { MainService } from './main.service';
import { pokemonDataClean } from './pokemon-data-clean';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  namePokemon: string[] = [
    'articuno', 'moltres', 'zapdos'
  ]

  status: string[] = [
    'attack', 'defense', 'life', 'speed'
  ]

  index: number = 0;
  pokemonInfo: pokemonDataClean[] = [];
  indexMinValue: number[]= [];

  constructor(private mainService: MainService) {
    this.namePokemon.forEach((pokemon) => {
      this.mainService.getObservablesPokemons(pokemon).subscribe(
        (data) => {
          this.pokemonInfo = [...this.pokemonInfo, {
            name: data['forms'][0]['name'],
            img: data['sprites']['other']['dream_world']['front_default'],
            type: data['types'][0]['type']['name'],
            id: data['id'],
            attack: data['stats'][0]['base_stat'],
            defense:  data['stats'][1]['base_stat'],
            life: data['stats'][2]['base_stat'],
            speed: data['stats'][5]['base_stat'],
            status: [
              data['stats'][0]['base_stat'],
              data['stats'][1]['base_stat'],
              data['stats'][2]['base_stat'],
              data['stats'][5]['base_stat'],
            ],
          }]
          this.sortPokemons(this.pokemonInfo);
        })
    })
  }

  sortPokemons(pokemons: pokemonDataClean[]) {
    this.pokemonInfo = pokemons.sort((a, b) => {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 0;
    })
  }

  getSelectedValue(event: string) {
    console.log(event)
    this.index = this.getValue(event)
    let attributePokemon = this.pokemonInfo.map( pokemon => {
      return pokemon['status'][this.index]
    })

    const maxValue = Math.max(...attributePokemon);
    console.log(maxValue)

    attributePokemon.forEach( (value, index) => {
      if (maxValue !== value) {
        this.indexMinValue.push(index)
      }
    })
    console.log(attributePokemon);
    console.log(this.indexMinValue);
  }

  getValue(event: string) {
    switch (event){
      case 'attack':
        return 0;
      case 'defense':
        return 1;
      case 'life':
        return 2;
      case 'speed':
        return 3
    }
    return 0
  }

}
