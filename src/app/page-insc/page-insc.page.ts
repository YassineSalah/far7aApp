import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-insc',
  templateUrl: './page-insc.page.html',
  styleUrls: ['./page-insc.page.scss'],
})
export class PageInscPage implements OnInit {
  value_selected: string;
  name: string;
  userName: string;
  email: string;
  password: string;
  liste:any[];
  constructor(private route: Router,private auth: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit() {
  }
  register() {
    this.auth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(done => {
        this.db.collection("Users").doc(done.user.uid).set({ username: this.userName, password: this.password, name: this.name, email: this.email ,position:this.value_selected})
          .then(done => {console.log("ajout done")
          this.AllerConx()})
          
          .catch(err => console.log(err.message)
          )
      }

      )
      .catch(err => console.log(err.message)
      )
  }
  AllerConx(){
    this.route.navigateByUrl('/page-acc')
  }
  getUser(){
    this.db.collection("Users").snapshotChanges()
    .subscribe
            (
              done=>{
                this.liste=done.map(
                  e=>{
                    return{
                      email:e.payload.doc.data()['email'],
                      name:e.payload.doc.data()['name']
                    }
                  }
                )
                }
                )
              }
  

  

}
