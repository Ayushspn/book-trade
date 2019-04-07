import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  loggedInUser = false;
  constructor(public afAuth: AngularFireAuth) { }
  ngAfterViewInit() {
  }
  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      user ? this.loggedInUser = true : this.loggedInUser = false;
    });
  }
}
