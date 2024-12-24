import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookAddComponent } from './book-add/book-add.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BookListComponent,
    BookEditComponent,
    BookAddComponent
  ],
  imports: [
    
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    
  
  ]
})
export class BooksModule { }
