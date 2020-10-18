import { createReducer, on } from '@ngrx/store';
import { List } from 'immutable';

import { addTodo, setIsDone } from '../actions/todo.actions';
import Todo from '../model/todo';

export interface State {
  todoList: List<Todo>;
}

export const initialState: State = {
  todoList: List<Todo>(),
};

export const reducer = createReducer(
  initialState,
  on(addTodo, (state, action) => ({
    ...state,
    todoList: state.todoList.push(action.todo),
  })),
  on(setIsDone, (state, action) => {
    if (action.todo.isDone === action.isDone) {
      return state;
    }

    const index = state.todoList.findIndex((t) => t === action.todo);

    if (index < 0) {
      return state;
    }

    let list = state.todoList.remove(index);

    list = list.insert(index, action.todo.set('isDone', action.isDone));

    return { ...state, todoList: list };
  })
);
