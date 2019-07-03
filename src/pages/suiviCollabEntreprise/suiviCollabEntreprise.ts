import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { resolveRendererType2 } from '@angular/core/src/view/util';
import { SoftSkill } from '../../bean/SoftSkill';

/**
 * Generated class for the GerersoftskillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gerersoftskill',
  templateUrl: 'suiviCollabEntreprise.html',
})
export class SuiviCollabEntreprisePage {

  user;
  loading=1;
  listCoached= []
  idUserSelected=null;
  csvContent: string;
  majeur:SoftSkill[]=[]
  mineur:SoftSkill[]=[]
  idEntreprise;
  map;
  majMin="1";
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
    this.idEntreprise=this.navParams.get('idEntreprise');

  }

  ionViewDidLoad=()=>{
    this.storage.get('user').then(user=>{
      this.user=user;
      let body={"coach":user.id,"entreprise":this.idEntreprise}
      this.http.post<User[]>('https://actincoachapi.appspot.com/coach/getCoached',body).subscribe(res=>{
       this.listCoached=res;
       this.loading=0;

      })

    })
  }

  onChangeTime=()=>{
    this.majeur=[]
    this.mineur=[]
    console.log("testets")
    let body={"user":this.idUserSelected}
    this.http.post<SoftSkill[]>('https://actincoachapi.appspot.com/coach/getSkillCoached',body).subscribe(res=>{
      console.log(res)
      res.map(soft=>{
        console.log(soft)
        if(soft.note>3){
          this.majeur.push(soft);
        }else{
          this.mineur.push(soft);
        }
      })
   });
   };
  
}

interface ListEntreprise {
  note: string;
  id_entreprise: string;
  logo_entreprise: string;
}

interface User {
  nom: string;
  prenom: string;
  id_user: string;
}
