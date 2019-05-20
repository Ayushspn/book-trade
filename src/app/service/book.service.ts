import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private booksDb: AngularFirestore) { }

  saveBookDetails(booksDetails) {
    return this.booksDb.collection('Books').doc(booksDetails.id).set({
      booksDetails
    }
      , { merge: true }
    );
  }

  getBookDetailsById(Bookid) {
    return this.booksDb.collection('Books').doc(Bookid);
  }

}
