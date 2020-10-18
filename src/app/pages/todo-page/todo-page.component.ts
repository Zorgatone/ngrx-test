import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { addTodo, setIsDone } from 'src/app/actions/todo.actions';
import { State } from 'src/app/reducers/';
import { todosListSelector } from 'src/app/selectors/todos.selectors';

import Todo from '../../model/todo';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TodoPageComponent implements OnInit {
  public title: string;
  public todo$: Observable<List<Todo>>;

  public constructor(private store: Store<State>) {
    this.title = '';

    this.todo$ = this.store.select(todosListSelector);
  }

  public ngOnInit(): void {
    //
  }

  public updateTodo(todo: Todo, checked: boolean): void {
    this.store.dispatch(
      setIsDone({
        todo: todo,
        isDone: checked,
      })
    );
  }

  public createTodo(): void {
    this.store.dispatch(
      addTodo({
        todo: new Todo({
          title: this.title,
          isDone: false,
        }),
      })
    );

    this.title = '';
  }
}
