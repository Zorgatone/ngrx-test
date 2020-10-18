import { createSelector } from '@ngrx/store';

import { State } from '../reducers/';

export const todosSelector = (state: State) => state.todos;

export const todosListSelector = createSelector(
  todosSelector,
  (state) => state.todoList
);
