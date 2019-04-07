import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import {FirebaseServiceService} from './database/firebase-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private firebaseServiceService: FirebaseServiceService,
    private elementRef: ElementRef
    ) {

  }
  title = 'book-trading';

  ngOnInit() {
    const books = this.firebaseServiceService.getBooks().subscribe((data) => {
      console.log('data', data);
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'cadetblue';
 }
}
