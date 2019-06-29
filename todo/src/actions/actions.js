export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export function addTodo(newTask) {
  return {
    type: ADD_TODO,
    payload: { task: newTask, completed: false }
  };
}

export function toggleCompleted(index) {
  return {
    type: "TOGGLE_COMPLETED",
    payload: index
  };
}
