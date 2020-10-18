import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo({ title: '', isDone: false })).toBeTruthy();
  });
});
