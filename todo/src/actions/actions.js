export const ADD_TODO = "ADD_TODO";

export function addTodo(newTask) {
  console.log(newTask);
  return {
    type: ADD_TODO,
    payload: { task: newTask, completed: false }
  };
}
