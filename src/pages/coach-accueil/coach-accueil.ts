import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoachAccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach-accueil',
  templateUrl: 'coach-accueil.html',
})
export class CoachAccueilPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  info = {nom:"Mary",prenom:"Marc",desc:"Meilleur Coach 2019"}
  
  GoOnToAllEntreprise(){
    this.navCtrl.push('CoachListeentreprisePage');
  }

  softSkillMineur = [
    { name: "Logique", note: 1 },
    { name: "Equipe", note: 2 },
    { name: "Altruiste", note: 3 }
  ]
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachAccueilPage');
  }

}
