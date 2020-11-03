import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  createUser(email: string, password: string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.angularFireAuth.signOut();
  }

  hasUser(){
    return this.angularFireAuth.authState;
    /*this.angularFireAuth.authState.subscribe(user => {
      console.log(user == null);});*/
  }
}
