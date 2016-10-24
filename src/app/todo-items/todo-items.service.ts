import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class TodoItemsService {
  items: Todo[];
  private _baseURL: string = "http://localhost:22000/todo";

  constructor(private _http: Http) { }

  addTodoItem(item: Todo) : Observable<Todo> {
    let headers: Headers = new Headers();
    headers.append('content-type', 'application/json');

    return this._http.post(this._baseURL, JSON.stringify(item), { headers: headers })
      .map(response => {
        let data = response.json();
        return { id: data.id, completed: data.completed, description: data.description };
      })
      .catch(error => Observable.throw(error.json()));
  }

  getTodoItems() : Observable<Todo[]> {
    let headers: Headers = new Headers();
    headers.append('content-type', 'application/json');

    return this._http.get(this._baseURL)
      .do(response => console.log(JSON.stringify(response.json())))
      .map((response: Response) => {
          var objs = response.json();
          var todos: Todo[] = [];
          for (let i = 0; i < objs.length; i++) {
              todos.push({ id: objs[i].id, completed: objs[i].completed, description: objs[i].description });
          }

          return todos;
      })
      .catch(error => Observable.throw(error.json()));
  }
}
