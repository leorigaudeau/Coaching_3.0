import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GerersoftskillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gerersoftskill',
  templateUrl: 'gerersoftskill.html',
})
export class GerersoftskillPage {

  softskill = [
    {name:"Softskill 1"},
    {name:"Softskill 2"},
    {name:"Softskill 3"},
    {name:"Softskill 4"},

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerersoftskillPage');
  }

}
