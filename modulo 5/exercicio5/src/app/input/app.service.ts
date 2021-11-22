import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import { data } from './data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  urlBase: string = '';

  constructor(private httpClient: HttpClient) { }

  getImageDog(nameDog: string) {
    this.urlBase = `https://dog.ceo/api/breed/${nameDog}/images`
    return this.httpClient.get<data>(this.urlBase).pipe(
      delay(20000)
    )
  }
}

