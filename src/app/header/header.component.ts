import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from '../auth/auth.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  loggedInUser = false;
  toggleDropDown = false;
  constructor(public afAuth: AngularFireAuth, private authServiceService: AuthServiceService, private router: Router) { }
  ngAfterViewInit() {
  }
  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      user ? this.loggedInUser = true : this.loggedInUser = false;
    });
  }

  toggleValue() {
    this.toggleDropDown = !this.toggleDropDown;
  }

  logOutUser() {
    this.authServiceService.logOut().then((data) => {
      this.afAuth.authState.subscribe((user) => {
        if (!user) {
          this.toggleDropDown = false;
          this.router.navigate(['/login']);
        }
      });
    });


  }
}
