import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../interfaces/Article";

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {ActionSheetController} from "@ionic/angular";


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() index: number;

  constructor(private iab: InAppBrowser,
              private actionSheetCrl: ActionSheetController
  ) { }

  ngOnInit() {}

  openNews() {
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  async showMenu() {
    const actionSheet = await this.actionSheetCrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Favorito',
          icon: 'star',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Cancel clicked');
          }
      }]
    });

    await actionSheet.present();
  }

}
