import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '', component: BookListComponent},

    {
        path: 'add',component: BookAddComponent
        
    },
    {path: 'edit/:id',component: BookEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class BooksRoutingModule { }

