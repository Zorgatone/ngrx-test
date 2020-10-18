import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import Todo from '../../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todoSubject: BehaviorSubject<List<Todo>>;

  private _todo$: Observable<List<Todo>>;

  public constructor() {
    this._todoSubject = new BehaviorSubject(List<Todo>());

    this._todo$ = this._todoSubject.asObservable().pipe(
      // tap((l) =>
      //   console.log(
      //     'Changed list to:',
      //     l.toArray().map((t) => t.toJS())
      //   )
      // ),
      shareReplay(1)
    );
  }

  public get todo$(): Observable<List<Todo>> {
    return this._todo$;
  }

  public addTodo(todo: Todo): void {
    const list = this._todoSubject.getValue();

    this._todoSubject.next(list.push(todo));
  }

  public toggleTodo(todo: Todo): void {
    let list = this._todoSubject.getValue();

    const index = list.findIndex((t) => t === todo);

    if (index >= 0) {
      list = list.remove(index);

      list = list.insert(index, todo.set('isDone', !todo.isDone));

      this._todoSubject.next(list);
    }
  }
}
