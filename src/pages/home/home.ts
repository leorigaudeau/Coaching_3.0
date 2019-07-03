import { Component } from '@angular/core';
import { AccueilPage } from '../accueil/accueil';
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

  GoOnToCOACHAccueil(){
    this.navCtrl.push('CoachAccueilPage');
  }

  GoOnToEntrepriseAccueil(){
    this.navCtrl.push('EntrepriseAccueilPage');
  }
  GoOnToCoachListeprofilPage(){
    this.navCtrl.push('CoachListeprofilPage');
  }
  GoOnToCoachListeentreprisePage(){
    this.navCtrl.push('CoachListeentreprisePage');
  }

  GoOnToCoachbienjouer(){
    this.navCtrl.push('FindejeuPage');
  }


  GoOnTogererUtilisateur(){
    this.navCtrl.push('GererutilisateurPage');
  }

  
}
