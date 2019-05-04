import { Component, OnInit } from '@angular/core';
import {FirebaseServiceService} from '../../database/firebase-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private firebaseDataSrvc: FirebaseServiceService) { }

  ngOnInit() {
    this.firebaseDataSrvc.getBooks().subscribe((data) => console.log(data));
  }

}
