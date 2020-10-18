import { createAction, props } from '@ngrx/store';
import Todo from '../model/todo';

export const addTodo = createAction('[TODO] Create', props<{ todo: Todo }>());

export const setIsDone = createAction(
  '[TODO] Set Done',
  props<{ todo: Todo; isDone: boolean }>()
);
