import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the SoftMineursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soft-mineurs',
  templateUrl: 'soft-mineurs.html',
})
export class SoftMineursPage {
  softSkillLike=[]
  softSkillUnlike=[]
  selected:number=0
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
    this.softSkillLike=this.navParams.get("like")
    this.softSkillUnlike=this.navParams.get("unlike")
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoftMineursPage');
  }

    
  updateSoftskill(element){
    if(element.isMineur){
      this.selected++;
    }else{
      this.selected--;
    }
    
  }

  nextstep(){
    this.storage.get('user').then(user=>{
      var test={"skills":this.softSkillUnlike,"id":user.id}
      this.http.put<UserResponse>('http://actincoachapi.appspot.com/saveSkill',test).subscribe(res=>{
        this.storage.set("softskillMineurs",this.softSkillUnlike) 
        this.navCtrl.push('SoftMajeursPage',{like: this.softSkillLike,unlike:this.softSkillUnlike});  
    })
    })
  }
}

interface UserResponse {
  login: string;
  id_user: string;
  entreprise: string;
  etat:boolean;
}