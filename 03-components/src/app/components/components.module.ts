import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    // Modulos que van a usarse fuera de este módulo
    HeaderComponent
  ],
  imports: [
    CommonModule,
      // Es necesario para poder usar components de Ionic
    IonicModule
  ]
})
export class ComponentsModule { }
