import { Component } from '@angular/core';
import { AccueilPage } from '../accueil/accueil';
import { ProfilPage } from '../profil/profil';
import { ReglesPage } from '../regles/regles';
import { NotationPage } from '../notation/notation';
import { SoftMajeursPage } from '../soft-majeurs/soft-majeurs';
import { SoftMineursPage } from '../soft-mineurs/soft-mineurs';
import { SwitchPage } from '../switch/switch';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController){

  }
  accueilPage =AccueilPage;
  
  GoOnToProfil(){
    this.navCtrl.push(ProfilPage);
  }
  
  reglesPage=ReglesPage;
  notationPage=NotationPage;
  softMajeursPage=SoftMajeursPage;
  softMineursPage=SoftMineursPage;
  switchPage=SwitchPage;
}
