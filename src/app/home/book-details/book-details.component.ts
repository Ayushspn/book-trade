import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      // this.bookService.getBookDetailsById(data.id).subscribe((data) => {
      //   console.log('data', data);
      // });
      this.bookService.getBookDetailsById(data.id).get().subscribe((doc) => {
        if (doc.exists) {
            console.log('Document data:', doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
        }
    }, (error) => {
      console.log(error);
    });
    });
  }

}
