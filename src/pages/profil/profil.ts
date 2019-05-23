import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  info = {nom:"Moreau",prenom:"Michel",desc:"Meilleur humain 2019"}
  
  softSkillMajeur = [
    { name: "Vivacité", note: 1 },
    { name: "Organisé", note: 2 },
    { name: "Sociable", note: 3 }
  ]
  softSkillMineur = [
    { name: "Logique", note: 1 },
    { name: "Equipe", note: 2 },
    { name: "Altruiste", note: 3 }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }



}
