import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

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
  softSkillMajeur=[]
  softSkillMineur=[]
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('softskillMineurs').then(softskillMineurs=>{
      this.softSkillMineur=softskillMineurs;
    })
    this.storage.get('softskillMajeurs').then(softskillMajeurs=>{
      this.softSkillMajeur=softskillMajeurs;
    })
  }



}
