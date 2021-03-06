import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookDetailsComponent } from './home/book-details/book-details.component';
const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'home', component : HomeComponent },
  {path : 'signup', component : SignupComponent },
  {path : 'forget-password', component: ForgetPasswordComponent},
  {path : 'profile', component: UserProfileComponent},
  {path : 'book-details/:id', component: BookDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
