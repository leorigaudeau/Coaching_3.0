import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SoftSkill} from '../../bean/SoftSkill'
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SoftMajeursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soft-majeurs',
  templateUrl: 'soft-majeurs.html',
})
export class SoftMajeursPage {
  softSkillLike=[]
  softSkillUnlike=[]
  selected:number=0
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
     this.softSkillLike=this.navParams.get("like")
     this.softSkillUnlike=this.navParams.get("unlike")
     console.log(this.softSkillLike)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoftMajeursPage');
  }

  
  updateSoftskill(element){
    if(element.isMajeur){
      this.selected++;
    }else{
      this.selected--;
    }
    
  }

  nextstep(){
    this.storage.get('user').then(user=>{
      console.log(user.id)
      var softskill={"skills":this.softSkillLike,"id":user.id}
      this.http.put<UserResponse>('http://actincoachapi.appspot.com/saveSkill',softskill).subscribe(res=>{ 
        this.storage.set("softskillMajeurs",this.softSkillLike)
        this.navCtrl.push('ProfilPage');

    })
    })
  }
  previewstep(){
    this.navCtrl.pop();
  }

  
}

interface UserResponse {
  login: string;
  id_user: string;
  entreprise: string;
  etat:boolean;
}
