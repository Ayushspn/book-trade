import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth.service.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private authService: AuthServiceService, private toastMaster: ToastrManager, private router: Router) { }

  ngOnInit() {
  }

  forgetPassword(email) {
    this.authService.foreget(email).then((data) => {
      this.toastMaster.infoToastr('Please check your registred email');
    });
  }






}
