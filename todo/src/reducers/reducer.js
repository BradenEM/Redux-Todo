import { ADD_TODO } from "../actions/actions";

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
    default:
      return state;
  }
}

export default reducer;
