import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { sha256, sha224 } from 'js-sha256';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
    this.isError=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }
  

  login(){
    var test={"login":this.username,"password":this.password}
    this.http.post<UserResponse>('https://actincoachapi.appspot.com/login',test).subscribe(res=>{ 
    if(!res.etat){
      var user={
        "nom" : res.nom,
        "prenom" :res.prenom,
        "logo":res.logo_entreprise,
        "service":res.service,
        "id":res.id_user
      }
      this.storage.set('user',user);

      if (res.nom_role == "collaborateur") {
        this.navCtrl.push('ReglesPage'); 
      } else if(res.nom_role == "coach") {
        this.navCtrl.push('CoachAccueilPage');
      }else if(res.nom_role == "entreprise"){
        this.navCtrl.push('EntrepriseAccueilPage');
      }
      res.nom_role
    }else{
      this.isError=true;
    }

       
    });
  }

}

interface UserResponse {
  login: string;
  id_user: string;
  nom_role: string;
  entreprise: string;
  etat:boolean;
  logo_entreprise : string;npm
  nom:string;
  service : string;
  prenom:string;
}