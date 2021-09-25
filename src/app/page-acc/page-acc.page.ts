import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-page-acc',
  templateUrl: './page-acc.page.html',
  styleUrls: ['./page-acc.page.scss'],
})
export class PageAccPage implements OnInit {
  email: string;
  password: string;
  users:any[];
  constructor(private route: Router, private fire: AngularFireAuth,public toastController: ToastController,private db: AngularFirestore) { }
  connecter() {
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
      .then(
        data => {
          
          this.route.navigateByUrl('/home')
          
        }
      )
      .catch(
        err => {
          this.presentToast()

        }
      )

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Invalid Email or Password !!!!!!!!',
      duration: 2000,
      color:'danger'
    });
    toast.present();
  }
  ngOnInit() {
  }

}
