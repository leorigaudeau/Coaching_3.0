import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import {SoftSkill} from '../../bean/SoftSkill'

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
  movieRating=5;
  ready = false;
  attendants = [];
  softSkillLike:SoftSkill[]=[];
  softSkillUnlike:SoftSkill[]=[];
  cardCursor: number = 0;
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private http: HttpClient) {
    this.http.get<SoftSkill[]>('https://actincoachapi.appspot.com/getSoftSkills').subscribe(res=>{
      for(var i=0;i<10;i++){
        var a=res[i]
        this.attendants.push({
          nom_softskill:a.nom_softskill,
          id_softskill: a.id_softskill,
          description: a.description,
          logo:'',
          likeEvent: new EventEmitter(),
          destroyEvent: new EventEmitter(),
      })
      }
      /*res.forEach(a=>{
        this.attendants.push({
          nom_softskill:a.nom_softskill,
          id_softskill: a.id_softskill,
          description: a.description,
          logo:a.logo,
          likeEvent: new EventEmitter(),
          destroyEvent: new EventEmitter(),
      })    
    });*/
    });


  this.ready = true;
  }


  like(like) {
    var self = this;
    if (this.attendants.length > 0) {
        self.attendants[this.cardCursor].likeEvent.emit({ like });
        if(like){
          this.presentPrompt()

        }else{
          self.attendants[this.cardCursor].note=2;
          var test=self.attendants[this.cardCursor]
          var softskill:SoftSkill=new SoftSkill(test.id_softskill,test.logo,test.nom_softskill,test.description,test.note);
          this.softSkillUnlike.push(softskill);
          this.nextCard();
        }
    }
}

  onCardInteract(event,attendant) {
    if(event.like){
      this.presentPrompt()
    }else{
      this.softSkillUnlike.push(attendant);
      this.nextCard();
    }

  }

  isLastCard(){
    return this.cardCursor===this.attendants.length-1
  }

  nextCard(){
    if(this.isLastCard()){
      this.navCtrl.push('SoftMineursPage',{like: this.softSkillLike,unlike:this.softSkillUnlike});
    }else{
      this.cardCursor++
    }

  }

  presentPrompt() {
    const alert = this.alertCtrl.create({
      title: 'Note ton skill',
      cssClass: 'alertstar',
      enableBackdropDismiss:false,
      buttons: [
           { text: '3', handler: data => {
            var test=this.attendants[this.cardCursor];
            test.note=3
            var softskill:SoftSkill=new SoftSkill(test.id_softskill,test.logo,test.nom_softskill,test.description,test.note);
            this.softSkillUnlike.push(softskill);
            this.nextCard();
           }},
           { text: '4', handler: data => {
            var test=this.attendants[this.cardCursor];
            test.note=4
            var softskill:SoftSkill=new SoftSkill(test.id_softskill,test.logo,test.nom_softskill,test.description,test.note);
            this.softSkillLike.push(softskill);
            this.nextCard();
           }},
           { text: '5', handler: data => {
            var test=this.attendants[this.cardCursor];
            test.note=5
            var softskill:SoftSkill=new SoftSkill(test.id_softskill,test.logo,test.nom_softskill,test.description,test.note);
            this.softSkillLike.push(softskill);
            this.nextCard();
           }}
      ]
 });
 alert.present();
  }
}


