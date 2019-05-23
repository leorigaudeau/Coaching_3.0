import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GererutilisateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gererutilisateur',
  templateUrl: 'gererutilisateur.html',
})
export class GererutilisateurPage {

  utilisateur = [
    {name:"Utilisateur 1"},
    {name:"Utilisateur 2"},
    {name:"Utilisateur 3"},
    {name:"Utilisateur 4"},

  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GererutilisateurPage');
  }

}
