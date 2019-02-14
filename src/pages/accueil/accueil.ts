import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  login(){
    var test={"login":this.username,"password":this.password}
    console.log(test)
    this.http.post('https://actincoachapi.herokuapp.com/login',test).subscribe(res=>{
      console.log(res)
      this.navCtrl.push('SoftSkillSwipePage');
    });
  }

}
