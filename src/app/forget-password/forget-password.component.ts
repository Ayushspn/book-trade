import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth.service.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private authService: AuthServiceService, private toastMaster: ToastrManager,
     private router: Router,
     private notifierService: NotifierService) { }

  ngOnInit() {
  }

  forgetPassword(email) {
    this.authService.foreget(email).then((data) => {
      debugger
      this.notifierService.notify('success', 'Please check your registred email');
    });
  }






}
