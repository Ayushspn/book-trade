import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth.service.service';

import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private  authService:  AuthServiceService, private toastrManger: ToastrManager, private router: Router) { }

  ngOnInit() {
  }
  signUp(email, password) {
    this.authService.signUp(email, password).then((data) => {
      this.toastrManger.successToastr('User Has been succesfully logged in' );
      this.router.navigate(['/login']);
    });
    console.log(email, password);
  }
}
