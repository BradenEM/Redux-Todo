import { ADD_TODO, TOGGLE_COMPLETED } from "../actions/actions";

const initialState = {
  todos: [
    {
      task: "Test",
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
}

export default reducer;
