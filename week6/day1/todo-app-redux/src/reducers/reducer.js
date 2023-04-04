const initialState = {
  todos: [],
  loading: false,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload.id),
      };
    case "FETCH_TODOS_REQUEST":
        return { ...state,  loading: true };
    case "FETCH_TODOS_SUCCESS":
        return { ...state, todos: action.payload.todos, loading: false };
    default:
      return state;
  }
};
