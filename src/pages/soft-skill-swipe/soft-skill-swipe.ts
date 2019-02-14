import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitizer: DomSanitizer) {
  
    for (let i = 0; i < 4; i++) {
      this.attendants.push({
          id: i + 1,
          likeEvent: new EventEmitter(),
          destroyEvent: new EventEmitter(),
          asBg: sanitizer.bypassSecurityTrustStyle('url(http://placehold.it/500x500)')
      });
  }

  this.ready = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoftSkillSwipePage');
  }


  onCardInteract(event,attendant) {
    console.log(event);
  }

}
