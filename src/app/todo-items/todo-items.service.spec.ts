/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoItemsService } from './todo-items.service';

describe('Service: TodoItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoItemsService]
    });
  });

  it('should ...', inject([TodoItemsService], (service: TodoItemsService) => {
    expect(service).toBeTruthy();
  }));
});
