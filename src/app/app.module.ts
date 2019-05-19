import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HeaderComponent } from './header/header.component';
import * as firebase from 'firebase';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DropdownDirective } from './shared/dropdown.directive';
import { BookListComponent } from './home/book-list/book-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateComponent } from './create/create.component';
import { BookComponent } from './home/book-list/book/book.component';


firebase.initializeApp(environment.config);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    DropdownDirective,
    BookListComponent,
    UserProfileComponent,
    CreateComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config, 'book-trading'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
