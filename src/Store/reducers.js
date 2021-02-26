const defaultState = {
  todos: [
    {id: 0, name: 'Buy Milk', done: false},
    {id: 1, name: 'Wash clothes', done: false},
    {id: 2, name: 'Bake Cookies', done: false},
    {id: 3, name: 'Pay Bills', done: false}
  ],
  idCounter: 4,
}

export default function todoReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_NEW_TODO":
      let new_todos = state.todos.slice()
      new_todos.push({id: state.idCounter, name: action.payload, done: false})
      console.log(new_todos)
      return {
        ...state, 
        todos: new_todos,
        idCounter: state.idCounter + 1,
      }
    case "DEL_TODO":
      return {
        ...state, 
        todos: state.todos.filter((todo)=>(
          todo.id != action.payload
      ))}
    case "SET_TODO_DONE":
      // How to make code below more concise? map()?
      let updated_todos = []
      state.todos.forEach((todo)=>{
        if (todo.id == action.payload) {
          todo.done = true
        }
        updated_todos.push(todo)
      })
      return {
        ...state,
        todos: updated_todos
      }
    default:
      return state;
  }
}