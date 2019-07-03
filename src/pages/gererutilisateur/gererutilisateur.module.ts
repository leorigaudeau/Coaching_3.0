import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GererutilisateurPage } from './gererutilisateur';

import { PapaParseModule } from 'ngx-papaparse';
@NgModule({
  declarations: [
    GererutilisateurPage,
  ],
  imports: [
    IonicPageModule.forChild(GererutilisateurPage),
    PapaParseModule
  ],
})
export class GererutilisateurPageModule {}
