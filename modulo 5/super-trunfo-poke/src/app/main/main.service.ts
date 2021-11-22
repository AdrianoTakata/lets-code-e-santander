import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { pokemonInfos } from './pokemon-infos';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  urlBase: string = '';

  constructor(private http: HttpClient) { }

  getObservablesPokemons(namePokemon: string) {
    this.urlBase = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
    return this.http.get<pokemonInfos>(this.urlBase).pipe(
      // tap( data => console.log(data))
    )
  } 
}
