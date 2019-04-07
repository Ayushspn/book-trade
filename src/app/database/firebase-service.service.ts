import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private booksDb: AngularFirestore) { }

  getBooks() {
    const booksNames = this.booksDb.collection('Books').valueChanges();
    return booksNames;
  }
}
