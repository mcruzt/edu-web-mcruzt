import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebaseApp from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      const provider = new firebaseApp.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }
  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebaseApp.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebaseApp.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if (firebaseApp.auth().currentUser){
        this.afAuth.signOut();
        resolve();
      }
      else{
        reject();
      }
    });
  }
}
