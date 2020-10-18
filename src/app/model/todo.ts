import { Record } from 'immutable';

export interface TodoContent {
  title: string;
  isDone: boolean;
}

export const defaultTodo: TodoContent = {
  title: '',
  isDone: false,
};

export class Todo extends Record(defaultTodo) implements TodoContent {
  public constructor(content: TodoContent) {
    super(content);

    console.log('Constructed new Todo object with:', content);
  }
}

export default Todo;
