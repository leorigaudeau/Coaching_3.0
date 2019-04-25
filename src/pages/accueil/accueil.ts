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
  isError:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
  this.isError=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }
  

  login(){
    var test={"login":this.username,"password":this.password}
    this.http.post<UserResponse>('https://actincoachapi.appspot.com/login',test).subscribe(res=>{ 
    if(!res.etat){
      this.navCtrl.push('SoftSkillSwipePage');
    }else{
      this.isError=true;
    }

       
    });
  }

}

interface UserResponse {
  login: string;
  bio: string;
  company: string;
  etat:boolean;
}