import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  async  login(email:  string, password:  string) {

    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password);
        console.log(email, password);
        this.router.navigate(['/home']);
    } catch (e) {
        alert('Error!'  +  e.message);
    }
    }

    async  signUp(email:  string, password:  string) {
      try {
           return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      } catch (e) {
          alert('Error!'  +  e.message);
      }
      }
      async  foreget(email:  string) {
        try {
             return this.afAuth.auth.sendPasswordResetEmail(email);
        } catch (e) {
            alert('Error!'  +  e.message);
        }
        }
}
