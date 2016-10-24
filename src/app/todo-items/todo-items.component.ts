import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoItemsService } from './todo-items.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  items: Todo[];

  constructor(private _todoService: TodoItemsService) { }

  ngOnInit() {
    this._todoService.getTodoItems().subscribe(todos => this._todoService.items = todos);
  }
}
