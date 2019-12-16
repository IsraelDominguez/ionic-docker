import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import {Article} from "../interfaces/Article";

@Injectable({
  providedIn: 'root'
})
export class NoticiasRepositoryService {

  noticias: Article[] = [];

  constructor(private storage: Storage) {

  }

  save(noticia: Article) {

    const exist = this.noticias.find(n => n.title === noticia.title);
    if (!exist) {
      this.noticias.unshift(noticia);
      this.storage.set('favs', this.noticias)
    }
  }

  getFavorites() {

     return this.noticias;
  }

}
