import { Injectable } from '@angular/core';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    new Book(1, 'Book 1', 'Author 1', 100),
    new Book(2, 'Book 2', 'Author 2', 200),
    new Book(3, 'Book 3', 'Author 3', 300),
    new Book(4, 'Book 4', 'Author 4', 400),
    new Book(5, 'Book 5', 'Author 5', 500),
  ];

  

  constructor() { }
  getBooks(): Book[] {
    return [...this.books];}
    addBook(title:string,author:string,price:number): void {
      const book = new Book(this.books.length + 1, title, author, price);
      this.books = [...this.books, book];
    }
  
    deleteBook(id: number): void {
      confirm('Are you sure you want to delete this book?');

      this.books = this.books.filter(book => book.id !== id);
    
    }
    getBookById(id: number): Book {
      return this.books.find(book => book.id === id)!;
    }
    updateBook(updatedBook: Book): void {
      this.books = this.books.map(book => {
        if (book.id === updatedBook.id) {
          return updatedBook;
        }
        return book;
      });
    }
}
