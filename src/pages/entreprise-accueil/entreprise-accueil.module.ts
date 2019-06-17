import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntrepriseAccueilPage } from './entreprise-accueil';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  declarations: [
    EntrepriseAccueilPage,
  ],
  imports: [
    IonicPageModule.forChild(EntrepriseAccueilPage),
    Ng2GoogleChartsModule
  ],
})
export class EntrepriseAccueilPageModule {}
