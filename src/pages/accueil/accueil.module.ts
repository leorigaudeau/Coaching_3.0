import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilPage } from './accueil';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AccueilPage,
    
  ],
  imports: [
    IonicPageModule.forChild(AccueilPage),
  ],
  exports: [
    AccueilPage
  ],
})
export class AccueilPageModule {}
