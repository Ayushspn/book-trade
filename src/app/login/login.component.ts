import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth/auth.service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  authService:  AuthServiceService, private activatedrouter: Router) { }

  ngOnInit() {
  }
  goToRegister() {
    this.activatedrouter.navigate(['/signup']);
  }
  forgetPassword() {
    this.activatedrouter.navigate(['/forget-password']);
  }
}
