import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SoftSkill} from '../../bean/SoftSkill'

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.softSkillLike=this.navParams.get("like")
    this.softSkillUnlike=this.navParams.get("unlike")
    console.log(this.softSkillLike)
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoftMineursPage');
  }

    
  updateSoftskill(){
    if(element.coche){
      selected++;
    }else{
      selected--;
    }
    
  }

  nextstep(){
    this.navCtrl.push('SoftMineursPage',{like: this.softSkillLike,unlike:this.softSkillUnlike});
  }

}
