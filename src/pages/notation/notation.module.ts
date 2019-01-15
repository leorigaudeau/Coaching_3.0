import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotationPage } from './notation';

@NgModule({
  declarations: [
    NotationPage,
  ],
  imports: [
    IonicPageModule.forChild(NotationPage),
  ],
})
export class NotationPageModule {}
