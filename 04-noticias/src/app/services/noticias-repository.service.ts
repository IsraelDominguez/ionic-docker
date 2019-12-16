import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import {Article} from "../interfaces/Article";
import {createConsoleLogger} from "@angular-devkit/core/node";

@Injectable({
  providedIn: 'root'
})
export class NoticiasRepositoryService {

  noticias: Article[] = [];

  constructor(private storage: Storage) {
    this.getFavorites();
  }

  save(noticia: Article) {

    const exist = this.noticias.find(n => n.title === noticia.title);
    if (!exist) {
      this.noticias.unshift(noticia);
      this.storage.set('favs', this.noticias)
    }
  }

  async getFavorites() {
     // Con Await hacemos que se espere a que se carge, así en save nos aseguramos que están cargadas
     const favs = await this.storage.get('favs');

     if (favs) {
       this.noticias = favs;
     }
  }

}
