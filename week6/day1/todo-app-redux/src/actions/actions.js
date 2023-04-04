export const addTodo = (text) => ({ type: "ADD_TODO", payload: { title: text } });

export const toggleTodo = (id) => ({ type: "TOGGLE_TODO", payload: { id } });

export const deleteTodo = (id) => ({ type: "DELETE_TODO", payload: { id } });

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: "FETCH_TODOS_REQUEST" });
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await response.json();
  console.log(todos);
  dispatch({ type: "FETCH_TODOS_SUCCESS", payload: { todos } });
};
