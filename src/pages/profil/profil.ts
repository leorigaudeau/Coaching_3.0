import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { SoftSkill } from '../../bean/SoftSkill';

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
  user={}
  softSkillMajeur=[]
  softSkillMineur=[]
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('user').then(user=>{
      this.user=user;
     let body={"user":user.id};
     this.http.post<SoftSkill[]>('https://actincoachapi.appspot.com/getSoftSkillsMineur',body).subscribe(res=>{ 
        this.softSkillMineur=res;
        console.log(res)
     })

     this.http.post<SoftSkill[]>('https://actincoachapi.appspot.com/getSoftSkillsMajeur',body).subscribe(res=>{ 
      this.softSkillMajeur=res;
      console.log(res)

   })

    })
  }
}




