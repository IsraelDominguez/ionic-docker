import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

// RXjs manejo de Observables
import { tap } from "rxjs/operators"

//provide root para servicio Global
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Inject Dependencies
  constructor(private http: HttpClient) { }

  getPostsData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(tap(console.log));
  }
}
