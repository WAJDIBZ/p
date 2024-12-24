import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books? : Book[];

  constructor(protected bookService : BookService){}

  deleteBook(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer ce livre?"))
      this.bookService.deleteBook(id).subscribe(
        bookDeleted => this.books = this.books?.filter(book=>book!.id !== bookDeleted.id)
      )
    //this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      books => this.books = books
    );
    
  }

}