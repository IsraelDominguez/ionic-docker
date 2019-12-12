import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewsApiResponse} from "../interfaces/NewsApiResponse";

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) {}

  getTopHeadlines() {
    return this.http.get<NewsApiResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bcc58f6ade604ec685e3bc4c248d1aee`);
  }
}
