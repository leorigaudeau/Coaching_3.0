import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SoftSkillSwipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  templateUrl: 'soft-skill-swipe.html',
})
export class SoftSkillSwipePage {
  ready = false;
  attendants = [];
  cardDirection = "xy";
  cardOverlay: any = {
    color:'#28e93b',
      like: {
          backgroundColor: '#28e93b',
      },
      dislike: {
          backgroundColor: '#e92828'
      }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitizer: DomSanitizer,private http: HttpClient) {
    this.http.get<SoftSkill[]>('https://actincoachapi.herokuapp.com/getSoftSkills').subscribe(res=>{
      res.forEach(a=>{
        this.attendants.push({
          id: a.nom_softskill,
          likeEvent: new EventEmitter(),
          destroyEvent: new EventEmitter(),
          asBg: sanitizer.bypassSecurityTrustStyle('url(http://placehold.it/500x500)')

      })    
    });
    });


  this.ready = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoftSkillSwipePage');
  }


  onCardInteract(event,attendant) {
    console.log(event);
  }

}
export interface SoftSkill {
  id_softskill:string;
  logo:string;
  nom_softskill: string;
}