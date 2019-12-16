import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../interfaces/Article";

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {ActionSheetController} from "@ionic/angular";
import {SocialSharing} from "@ionic-native/social-sharing/ngx";
import {NoticiasRepositoryService} from "../../services/noticias-repository.service";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {

  @Input() noticia: Article;
  @Input() index: number;
  @Input() favs;

  constructor(private iab: InAppBrowser,
              private actionSheetCrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private noticiaRepository: NoticiasRepositoryService,
              public toastCtrl: ToastController
  ) { }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  openNews() {
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  async showMenu() {

    let favsButton;

    if (this.favs) {
      favsButton = {
        text: 'Favorito',
            icon: 'star',
            cssClass: 'action-dark',
            handler: () => {
              this.noticiaRepository.save(this.noticia);
              this.presentToast('Save to Favs');
          }
      }
    } else {
      favsButton = {
        text: 'Quitar Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.noticiaRepository.delete(this.noticia);
          this.presentToast('Delete from Favs');
        }
      }
    }

    const actionSheet = await this.actionSheetCrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
            this.socialSharing.share(
                this.noticia.title,
                this.noticia.source.name,
                '',
                this.noticia.url
            );
          }
        }, favsButton,
        {
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
