import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SoftSkill} from '../../bean/SoftSkill'
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
    console.log(this.softSkillLike)
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
    this.storage.get('id').then(id=>{
      console.log(id)
      var test={"skills":this.softSkillUnlike,"id":id}
      this.http.put<UserResponse>('http://actincoachapi.appspot.com/saveSkill',test).subscribe(res=>{ 
        this.navCtrl.push('ReglesPage');
    })
    })
  }
}
interface UserResponse {
  
}