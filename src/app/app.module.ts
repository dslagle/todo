import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoItemsService } from './todo-items/todo-items.service';

import { AppComponent } from './app.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
