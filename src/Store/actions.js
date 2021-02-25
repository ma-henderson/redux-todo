export const setNewTodo = (todo) => ({
  type: "SET_NEW_TODO",
  payload: todo,
});

export const delTodo = (todo_id) => ({
  type: "DEL_TODO",
  payload: todo_id,
});
