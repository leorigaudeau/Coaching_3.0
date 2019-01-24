import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Ionic2RatingModule } from 'ionic2-rating';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AccueilPage} from '../pages/accueil/accueil';
import { ProfilPage } from '../pages/profil/profil';
import { ReglesPage } from '../pages/regles/regles';
import { NotationPage } from '../pages/notation/notation';
import { SoftMajeursPage } from '../pages/soft-majeurs/soft-majeurs';
import { SoftMineursPage } from '../pages/soft-mineurs/soft-mineurs';
import { SwitchPage } from '../pages/switch/switch';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccueilPage,
    ProfilPage,
    ReglesPage,
    NotationPage,
    SoftMajeursPage,
    SoftMineursPage,
    SwitchPage
  ],
  imports: [
    BrowserModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccueilPage,
    ProfilPage,
    ReglesPage,
    NotationPage,
    SoftMajeursPage,
    SoftMineursPage,
    SwitchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
