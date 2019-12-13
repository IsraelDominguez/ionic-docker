import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NewsApiResponse} from "../interfaces/NewsApiResponse";
import {environment} from "../../environments/environment";

const apiKey = environment.apiKey;
const endpoint = environment.apiEndpoint;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  pageNumber = 0;

  constructor(private http: HttpClient) {}

  private performQuery( query: string ){
    query = endpoint + query;
    //console.log(query);
    return this.http.get<NewsApiResponse>(query, { headers });
  }

  getTopHeadlines() {
    this.pageNumber++;
    return this.performQuery(`/top-headlines?country=us&page=${this.pageNumber}`);
  }

  getTopHeadlinesByCategory(category: string) {

    return this.performQuery(`/top-headlines?country=us&category=${category}`);
  }

}
