/*THIS MODULE HANDLES SORTING OF TODOS AND APP INTERACTION BASED ON SORTING*/
import { todoArray, deleteTodo } from "./todo";
import { storeTodo } from "./storage";
export let activeTodo;
export let completedTodo;

export function filterActiveTodo() {
  activeTodo = todoArray.filter((todo) => {
    return !todo.completed;
  });
  return activeTodo;
}
export function filterCompletedTodo() {
  completedTodo = todoArray.filter((todo) => {
    return todo.completed;
  });
  return completedTodo;
}

export function clearCompletedTodo() {
  filterCompletedTodo();
  completedTodo.forEach((todo) => {
    deleteTodo(todo);
    storeTodo();
  });
}
