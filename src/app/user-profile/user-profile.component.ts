import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private afStorage: AngularFireStorage) { }
  // ref: AngularFireStorage;
  task: AngularFireUploadTask;
  gender = ['Male', 'Female'];
  imagePath: string;
  ngOnInit() {
  }
  onUploadImage(event) {
    console.log(event.target.files[0]);
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    const storageRef = firebase.storage().ref();
    const file = event.target.files[0];
    const mountainsRef = storageRef.child(`profile/${loggedInUser.email}${file.name}`);
       mountainsRef.put(file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      mountainsRef.getDownloadURL().then((url) => {
          this.imagePath = url;
      });
    }, (error) => {
      console.log('error');
    });
  }

  onFormSubmit(value) {
    
  }
}
