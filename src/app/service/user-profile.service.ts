import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private booksDb: AngularFirestore) { }

  saveUserProfile(userDetails) {
     return this.booksDb.collection('UserProfile').doc(userDetails.id).set({
        userDetails
      });
  }
}
