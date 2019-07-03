import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the CoachListeentreprisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach-listeentreprise',
  templateUrl: 'coach-listeentreprise.html',
})
export class CoachListeentreprisePage {

  user={}
  list= []

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachListeentreprisePage');
    this.storage.get('user').then(user=>{
      this.user=user;
      var body={"coach":user.id}
      this.http.post<ListEntreprise[]>('https://actincoachapi.appspot.com/coach/getEntreprise',body).subscribe(res=>{
       this.list=res;
       console.log(res)
      })

    })
  }

  GoOnToSuiviCollabEntreprisePage(id){
    let paramObj = { idEntreprise: id };
    this.navCtrl.push('SuiviCollabEntreprisePage',paramObj);
  }

}


interface ListEntreprise {
  nom_entreprise: string;
  id_entreprise: string;
  logo_entreprise: string;
}