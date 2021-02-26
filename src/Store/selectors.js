import {createSelector} from 'reselect';

// used below
const todoPageState = (state) => state;

// exports a function that creates a selector based on 2 things:
// 1) The todoPage's state object (from above)
// 2) With that state object, get the `todos` from it
export const makeSelectTodos = createSelector(
  todoPageState,
  (todoPage) => todoPage.todos
)