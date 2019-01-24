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

  list: Array<Object>= [
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

  setnote(){
    this.list.forEach(element => {
      for (var index = 1; index <= 5; index++) {
        if (index<=element.note) {
          document.getElementById(String(index)).className='casenote';
        }
        console.log(this.list[index].note);
        
      }
    });
    
  }
  
   
  updateSoftskill(){
    this.list.forEach(element => {
      console.log("event"+element.name+" " +element.coche)
    });
    
  }

  onModelChange(event){
    this.rate = event;
    console.log(event);
  };

  
  
}
