import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
    //this.titulo = 'Inicio';
  }

  async presentAlertInput() {
    const alertInput = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Ingrese su titulo',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          min: 3,
          max: 10
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.titulo = data.titulo;
            console.log('Confirm OK', data);
          }
        }
      ]
    });

    await alertInput.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Confirm OK');
          }
        }
      ]
    });

    await alert.present();
  }
}
