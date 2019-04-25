export class SoftSkill {
    id_softskill:string;
    logo:string;
    nom_softskill: string;
    note:number
    coche:boolean
    
    constructor(id_softskill:string,logo:string,nom_softskill:string,note:number) {
        this.id_softskill=id_softskill;
        this.nom_softskill=nom_softskill;
        this.logo=logo;
        this.note=note;
        this.coche=false;
   }
  }