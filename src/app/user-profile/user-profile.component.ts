import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { UserProfileService } from '../service/user-profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private afStorage: AngularFireStorage, private userProfileService: UserProfileService, 
    private afStore: AngularFirestore, private activatedrouter: Router ) { }
  // ref: AngularFireStorage;
  task: AngularFireUploadTask;
  gender = ['Male', 'Female'];
  disableBtn = true;
  imagePath: string;
  ngOnInit() {
  }
  onUploadImage(event) {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    const storageRef = firebase.storage().ref();
    const file = event.target.files[0];
    const profilepic = storageRef.child(`profile/${loggedInUser.email}${file.name}`);
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

  onFormSubmit(userlogin) {
    const id = this.afStore.createId();
    userlogin.value.imgePath = this.imagePath;
    userlogin.value.id = id;
    this.userProfileService.saveUserProfile(userlogin.value).then((data) => {
      this.activatedrouter.navigate(['/home']);
    });

}
}
