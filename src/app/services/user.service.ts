import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebaseApp from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
      const user = firebaseApp.auth().onAuthStateChanged(function( user): void{
        if (user) {
          resolve(user);
        } else {
          reject('Favor de iniciar sesión.');
        }
      });
    });
  }

  updateCurrentUser(value){
    return new Promise<any>((resolve, reject) => {
      const user = firebaseApp.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
}
