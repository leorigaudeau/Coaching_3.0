import { Component } from '@angular/core';
import { AccueilPage } from '../accueil/accueil';
import { ProfilPage } from '../profil/profil';
import { ReglesPage } from '../regles/regles';
import { NotationPage } from '../notation/notation';
import { SoftMajeursPage } from '../soft-majeurs/soft-majeurs';
import { SoftMineursPage } from '../soft-mineurs/soft-mineurs';
import { SoftSkillSwipePage } from '../soft-skill-swipe/soft-skill-swipe';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController){

  }
  accueilPage =AccueilPage;
  
  GoOnToProfil(){
    this.navCtrl.push('ProfilPage');
  }

  GoOnToAcceuil(){
    this.navCtrl.push('AccueilPage');
  }

  GoOnToSwitch(){
    this.navCtrl.push('SoftSkillSwipePage');
  }

  
  GoOnToRegle(){
    this.navCtrl.push('ReglesPage');
  }

  
  GoOnToNotation(){
    this.navCtrl.push('NotationPage');
  }

  
  GoOnToSoftMineurs(){
    this.navCtrl.push('SoftMineursPage');
  }

    
  GoOnToSoftMajeurs(){
    this.navCtrl.push('SoftMajeursPage');
  }

}
