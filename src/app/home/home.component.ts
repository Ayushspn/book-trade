import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth.service.service';
import {BookListComponent} from './book-list/book-list.component';
import {CreateComponent} from '../create/create.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
