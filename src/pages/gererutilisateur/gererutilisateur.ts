import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import * as papa from 'papaparse';

/**
 * Generated class for the GererutilisateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gererutilisateur',
  templateUrl: 'gererutilisateur.html',
})
export class GererutilisateurPage {

  user;
  listentreprise= []
  idEntrepriseSelect=null;
  csvContent: string;
  newUser=[]
  listNewUserSave:UserResponse[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('user').then(user=>{
      this.user=user;
      var body={"coach":user.id}
      this.http.get<ListEntreprise[]>('https://actincoachapi.appspot.com/entreprise/getAllEntreprise').subscribe(res=>{
       this.listentreprise=res;
      })

    })
  }
  onFileLoad=(fileLoadedEvent)=> {
    const textFromFileLoaded = fileLoadedEvent.target.result;              
    this.csvContent = textFromFileLoaded;     
    let parsedData = papa.parse(this.csvContent).data;
      parsedData.splice(0, 1);
      parsedData.map(line=>{
        console.log(this.user)
        var nwuser={
          "nom":line[0],
          "prenom": line[1] ,
          "login" : line[2],
          "service": line[3] ,
          "mail":line[4] ,
          "password":Math.random().toString(36).slice(-8),
          "id_coach": this.user.id,
          "id_entreprise":this.idEntrepriseSelect,
        };
        this.newUser.push(nwuser);
      })
      let test={"listeCoached":this.newUser};
      this.http.put<UserResponse[]>('http://actincoachapi.appspot.com/coach/newCoached',test).subscribe(res=>{
        this.listNewUserSave=res;
      });
  }

  onFileSelect(input) {
    this.newUser=[];
    const files = input.files;

   if (files && files.length) {

        const fileToRead = files[0];

        const fileReader = new FileReader();
        fileReader.onload = this.onFileLoad;

        fileReader.readAsText(fileToRead, "UTF-8");
   }

  }
  
}

interface ListEntreprise {
  nom_entreprise: string;
  id_entreprise: string;
  logo_entreprise: string;
}

interface UserResponse {
  login: string;
  id_user: string;
  password: string;
  mail:boolean;
}