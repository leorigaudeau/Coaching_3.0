import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SoftSkill} from '../../bean/SoftSkill'

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.softSkillLike=this.navParams.get("like")
     this.softSkillUnlike=this.navParams.get("unlike")
     console.log(this.softSkillLike)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoftMajeursPage');
  }

  
  updateSoftskill(element){
    if(element.coche){
      this.selected++;
    }else{
      this.selected--;
    }
    
  }

  nextstep(){
    this.navCtrl.push('SoftMineursPage',{like: this.softSkillLike,unlike:this.softSkillUnlike});
  }

  // onModelChange(event){
  //   this.rate = event;
  //   console.log(event);
  // };

  
  
}
