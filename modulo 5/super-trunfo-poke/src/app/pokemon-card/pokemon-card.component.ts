import { Component, Input, OnInit } from '@angular/core';
import { pokemonDataClean } from '../main/pokemon-data-clean';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokeInfo: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.pokeInfo['status'])
  }

}
