import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

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

  public constructor(public todoService: TodoService) {
    this.title = '';
  }

  public ngOnInit(): void {
    //
  }

  public updateTodo(todo: Todo, checked: boolean): void {
    if (todo.isDone !== checked) {
      this.todoService.toggleTodo(todo);
    }
  }

  public createTodo(): void {
    this.todoService.addTodo(
      new Todo({
        title: this.title,
        isDone: false,
      })
    );
    this.title = '';
  }
}
