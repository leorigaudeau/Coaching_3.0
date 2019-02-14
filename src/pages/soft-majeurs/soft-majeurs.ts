import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  list= [
    { name: "HTML5", note: 1,coche: false },
    { name: "JavaScript", note: 2,coche: false },
    { name: "Css", note: 3,coche: false },
    { name: "Git", note: 4 ,coche: false}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoftMajeursPage');
  }

  
  updateSoftskill(){
    this.list.forEach(element => {
      console.log("event"+element.name+" " +element.coche)
    });
    
  }

  // onModelChange(event){
  //   this.rate = event;
  //   console.log(event);
  // };

  
  
}
