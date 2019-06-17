import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EntrepriseAccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entreprise-accueil',
  templateUrl: 'entreprise-accueil.html',
})
export class EntrepriseAccueilPage {

  pieChartData={};

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }

  ionViewDidLoad() {
    this.useAngularLibrary();
    console.log('ionViewDidLoad EntrepriseAccueilPage');
  }

  useAngularLibrary() {
    console.log(window.innerHeight)
    var dataTable:any[]=[];
    dataTable=[ ['Softskill', '', '', 'Nombre de collaborateur ayant acquis le softskill' ,'Moyenne'],]
    var body={"entreprise":"04df0dca-fe56-11e8-8eb2-f2801f1b9fd2"}
    this.http.post<JsonResponse>('https://actincoachapi.appspot.com/entreprise/getJsonSkill',body).subscribe(res=>{
    var total=0;  
    res.skills.forEach((skill,pos)=>{
        let x=pos%9;
        let y=Math.trunc(pos/9);
        let moy=parseInt(skill.sum)/parseInt(res.nbr_collaborateur);
        dataTable.push([skill.nom_softskill,x,y,parseInt(skill.majeur),moy])
        total=y+1;
      })
      this.pieChartData = {
        chartType: 'BubbleChart',
        dataTable: dataTable,
        options: {
        colorAxis: {colors: ['yellow', 'red']},
        height:window.innerHeight,
        window:window.innerWidth,
        vAxis:{
          baselineColor: 'transparent',
          gridlineColor: 'transparent',
          textPosition: 'none',
          minValue:-1,
          maxValue:total,
          gridlines:{
            color:"transparent"
          }
        },
        hAxis:{
          baselineColor: 'transparent',
          gridlineColor: 'transparent',
          textPosition: 'none',
          minValue:-1,
          maxValue:9,
          gridlines:{
            color:"transparent"
          }
        },
        bubble: {
          textStyle: {
            color : "transparent",
            fontSize: 0,
          }
        }		
  
        }
      };
  });

  }

}


interface NoteResponse {
  majeur: string;
  sum: string;
  nom_softskill: string;
}

interface JsonResponse {
  nbr_collaborateur: string;
  skills: NoteResponse[];
}