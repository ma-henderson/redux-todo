export const setNewTodo = (todo) => ({
  type: "SET_NEW_TODO",
  payload: todo,
});

export const delTodo = (todo_id) => ({
  type: "DEL_TODO",
  payload: todo_id,
});
  
export const finishTodo = (todo_id) => ({
  type: "SET_TODO_DONE",
  payload: todo_id,
});
