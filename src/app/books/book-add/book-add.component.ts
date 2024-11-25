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

  onSubmit(f : NgForm): void {
    

    this.bookService.addBook(f['controls']['title']['value'], f['controls']['author']['value'], f['controls']['price']['value']); 
    this.router.navigate(['/']);
    console.log(f);
  }
}