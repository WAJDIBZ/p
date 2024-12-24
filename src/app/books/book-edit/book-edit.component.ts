import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent implements OnInit {
  book !: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  editBook(f : NgForm){
    this.bookService.editBook(this.book!).subscribe(
      book => this.router.navigate(['/books'])
    );
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      parametres => {
        //console.log(parametres['id']);
        
        /*if(this.bookService.getBookById(+parametres['id']) !== undefined){
          this.book = this.bookService.getBookById(+parametres['id']);
          console.log(this.book);
        }
        else
          console.log("Le livre est introuvable");*/

          this.bookService.getBookById((parametres['id'])).subscribe(
            book=>this.book = book
          )
      }


    )
  }


}