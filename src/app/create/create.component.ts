import { Component, OnInit, DoCheck } from '@angular/core';
import { BookService } from '../service/book.service';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private bookService: BookService, private afStore: AngularFirestore) { }
  imagePath: string;
  disableBtn = true;
  setAttribute = '';
  ngOnInit() {
    this.setAttribute = '';
  }
  // ngDoCheck() {
  //   this.setAttribute = '';
  // }
  onUploadImage(event) {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    const storageRef = firebase.storage().ref();
    const file = event.target.files[0];
    const profilepic = storageRef.child(`book/${loggedInUser.email}${file.name}`);
    profilepic.put(file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      profilepic.getDownloadURL().then((url) => {
        this.imagePath = url;
        this.disableBtn = false;
      });
    }, (error) => {
      console.log('error');
    });
  }
  onFormSubmit(details) {
    const createdId = JSON.parse(localStorage.getItem('user')).uid;
   const id = this.afStore.createId();
    details.value.imgePath = this.imagePath;
    details.value.id = id;
    details.value.createdId = createdId;
    this.bookService.saveBookDetails(details.value).then((data) => {
      this.setAttribute = 'modal';
    });
    console.log('details', details.value);
  }
}
