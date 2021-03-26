import { Component, Input, OnInit, Output } from '@angular/core';
import { CvService } from '../cv.service';
import { Personne } from '../item-component/model';
//import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  public personnes : Personne[]=[];
  public selectpersonne:Personne
public pers1: Personne
  public pers2: Personne
  constructor(private cvservive: CvService) {     

  }
  
  ngOnInit(): void {
    this.personnes = this.cvservive.getPersonne();
    console.log(this.personnes);
    // this.personnes = [
    //   new Personne('./assets/Photo.jpg',1,'Bouyahya','Ali', 35, 6211295,'Enseignant','https://www.linkedin.com/in/ali-bouyahya-49839b5a/'),
    //  new Personne('./assets/zeneddine.jpg',2,'zeneddine','zidene', 50, 6000295,'Joueur','https://www.linkedin.com/in/zinedine-zidane-a49711195/?originalSubdomain=mx') ,  
    
    // ]
  }
  receivedetailfromitem1(personne:Personne){
    this.selectpersonne=personne;
    //console.log(this.selectpersonne);
    this.pers1=this.selectpersonne;
    console.log(this.pers1);

    

 
  }
  // receivedetailfromitem2(selectpersonne){
  //   this.pers1=selectpersonne[1];
 
  // }
 
  senddatatodetail(){

  }
 
}
