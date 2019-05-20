import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() bookDetails;
  constructor(private router: Router) { }

  ngOnInit() {
  }


  goToBookDetailsPage(bookId) {
    this.router.navigate([`/book-details`, bookId]);
  }
}
