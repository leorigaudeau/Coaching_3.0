import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwitchPage } from '../switch/switch';

/**
 * Generated class for the ReglesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regles',
  templateUrl: 'regles.html',
})
export class ReglesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  GoOnToSwitch(){
    this.navCtrl.push(SwitchPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReglesPage');
  }

}
