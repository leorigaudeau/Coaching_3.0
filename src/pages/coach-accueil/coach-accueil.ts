import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
  }

  user={}
  
  GoOnToAllEntreprise(){
    this.navCtrl.push('CoachListeentreprisePage');
  }

  GoOnUserHandler(){
    this.navCtrl.push('GererutilisateurPage');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachAccueilPage');
    this.storage.get('user').then(user=>{
      this.user=user;
    })
  }

}

