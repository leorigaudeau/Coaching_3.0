import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SwipeableCardModule } from 'ng2-swipeable-card';
import { MyApp } from './app.component';
import { ProfilPage } from '../pages/profil/profil';
import { ReglesPage } from '../pages/regles/regles';
import { NotationPage } from '../pages/notation/notation';
import { SoftMajeursPage } from '../pages/soft-majeurs/soft-majeurs';
import { SoftMineursPage } from '../pages/soft-mineurs/soft-mineurs';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwipeableCardModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
