import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.page.html',
  styleUrls: ['./proprietaire.page.scss'],
})
export class ProprietairePage implements OnInit {
  @ViewChild("id_f") file_id:any;
  NomSalle: string;
  addresse: string;
  PlaceNumber: number;
  PrixLocation:number;
  constructor(private route: Router,private db: AngularFirestore,private storage:AngularFireStorage) { }

  ngOnInit() {
  }
  ajouter(){
    const files=this.file_id.nativeElement.files[0];
    const filePath=`${Date.now()}_${files.name}`;
    this.storage.upload(filePath,files);

    this.db.collection("Salles").add(
      {nomSalle:this.NomSalle, adresse:this.addresse, nbrePlace:this.PlaceNumber ,prix:this.PrixLocation,image:filePath}
    ).then(
      data=>{console.log("ajout done")}
    )
    .catch(
      err=>{console.log(err.message)}
    )

  }

}
