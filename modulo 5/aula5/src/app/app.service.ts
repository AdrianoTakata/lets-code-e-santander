import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {}

  pokeUrl: string = 'https://pokeapi.co/api/v2/pokemon/ditto';

  getPokemon() {
    return this.httpClient.get(this.pokeUrl)
      .pipe(
        catchError( (x) => {
          console.log(x);
          return of ('Deu Ruim!!')
        })
    )
  }
  
}

