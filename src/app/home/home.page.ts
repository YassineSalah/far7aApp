import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  password: string;
 liste:any= []; 

  constructor(private route: Router, private fire: AngularFireAuth,public toastController: ToastController,private db: AngularFirestore,private storage:AngularFireStorage ) {
    this.getSalles();
   }
    
  // connecter() {
  //   this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
  //     .then(
  //       data => {
  //         this.route.navigateByUrl('/page-acc')
          
  //       }
  //     )
  //     .catch(
  //       err => {
  //         // this.presentToast()

  //       }
  //     )

  // }
  // AllerInscr(){
  //   this.route.navigateByUrl('/page-insc')
  // }
  // // async presentToast() {
  // //   const toast = await this.toastController.create({
  // //     message: 'Invalid Email or Password !!!!!!!!',
  // //     duration: 2000,
  // //     color:'danger'
  // //   });
  // //   toast.present();
  // // }
   AllerPropri(){
     this.route.navigateByUrl('/proprietaire')
   }

  getSalles(){
    this.db.collection("Salles").snapshotChanges()
    .subscribe
            (
              data=>{
                this.liste=data.map(
                  e=>{
                    return{
                      nomSalle:e.payload.doc.data()['nomSalle'],
                      adresse:e.payload.doc.data()['adresse'],
                      nbrePlace:e.payload.doc.data()['nbrePlace'],
                      image:this.storage.ref(e.payload.doc.data()['image']).getDownloadURL(),
                      prix:e.payload.doc.data()['prix'] ,
                      propriétaire:e.payload.doc.data()['propriétaire']
                    }
                  }
                )
                }
                )
  }

  DeleteSalle(item){
      this.db.doc("Salles/"+item.id).delete();
      this.getSalles();
  }
  
}
