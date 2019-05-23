import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoachListeentreprisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach-listeentreprise',
  templateUrl: 'coach-listeentreprise.html',
})
export class CoachListeentreprisePage {

  list= [
    {id:1, name: "Entreprise1", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    {id:2, name: "Entreprise2", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    {id:3, name: "Entreprise3", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    {id:4, name: "Entreprise4", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    {id:5, name: "Entreprise5", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    {id:6, name: "Entreprise6", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    {id:7, name: "Entreprise7", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    {id:8, name: "Entreprise8", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    {id:9, name: "Entreprise9", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    {id:10, name: "Entreprise10", image: "https://fr.freelogodesign.org/Content/img/logo-ex-3.png"},
    
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachListeentreprisePage');
  }

  
}
