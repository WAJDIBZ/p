import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books = [];
  private baseURL = "http://localhost:3000/books";
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }

  booksEdited = new Subject<Book[]>();

  constructor(private httpClient : HttpClient) { }

  getBooks() : Observable<Book[]>{
    //return [...this.books];
    return this.httpClient.get<Book[]>(this.baseURL);
  }

  addBook(title : string, author : string, price : number): Observable<Book>{
    /*const newBook = new Book(
      this.books[this.books.length - 1].id + 1,
      title,
      author,
      price
    );
    this.books = [...this.books, newBook]*/
    return this.httpClient.post<Book>(
      this.baseURL,
      JSON.stringify({
        title : title,
        author : author,
        price : price
      }),
      this.options
      )
  }

  getBookById(id: number) : Observable<Book>{
    //return this.books.find(book=>book.id === id)
    return this.httpClient.get<Book>(this.baseURL+"/"+id);
  }

  editBook(book : Book) : Observable<Book>{
    /*this.books = this.books.map(
      b=>b.id === book.id?book:b
    )*/
   return this.httpClient.put<Book>(
    this.baseURL+"/"+book.id,
    JSON.stringify({
      title : book.title,
      author : book.author,
      price : book.price
    }),
    this.options
    )
  }

  deleteBook(id : number):Observable<Book>{
    /*this.books = this.books.filter(book=>book.id !== id);
    //console.log(this.books);
    this.booksEdited.next([...this.books]);*/
    return this.httpClient.delete<Book>(this.baseURL+"/"+id)
  }
}