import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  email: string;
  password: string;
  constructor(private route: Router, private fire: AngularFireAuth,public toastController: ToastController) { }
  connecter() {
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
      .then(
        data => {
          this.route.navigateByUrl('/page-acc')
          
        }
      )
      .catch(
        err => {
          this.presentToast()

        }
      )

  }
  AllerInscr(){
    this.route.navigateByUrl('/page-insc')
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Invalid Email or Password !!!!!!!!',
      duration: 2000,
      color:'danger'
    });
    toast.present();
  }

  AllerConx(){
    this.route.navigateByUrl('/page-acc')
  }
  AllerHome(){
    this.route.navigateByUrl('/home')

  }
}
