import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-add',
  
  
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  title: string = '';
  author: string = '';
  price: number = 0;

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit(f : NgForm){
    //console.log(f);
    this.bookService.addBook(f.value.title, f.value.author, +f.value.price).subscribe(
      book => this.router.navigate(['/books'])
    );
  }
}