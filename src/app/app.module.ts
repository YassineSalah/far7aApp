import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth'
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBQ-WDptn9tfk9YmqQe2AdZ8F19P_Gssww",
  authDomain: "test2-3de53.firebaseapp.com",
  projectId: "test2-3de53",
  storageBucket: "test2-3de53.appspot.com",
  messagingSenderId: "431766389383",
  appId: "1:431766389383:web:8894512c04537c652c6e22"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule,
  AngularFireStorageModule,
  AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
