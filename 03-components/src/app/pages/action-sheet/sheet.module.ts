import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheetPageRoutingModule } from './sheet-routing.module';

import { SheetPage } from './sheet.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheetPageRoutingModule,
      ComponentsModule
  ],
  declarations: [SheetPage]
})
export class SheetPageModule {}
