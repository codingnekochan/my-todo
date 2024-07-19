/*THIS MODULE HANDLES SORTING OF TODOS AND APP INTERACTION BASED ON SORTING*/
import { todoArray, deleteTodo } from "./todo";
import { storeTodo } from "./storage";
let activeTodo;
let completedTodo;

function filterActiveTodo() {
  activeTodo = todoArray.filter((todo) => {
    return !todo.completed;
  });
  return activeTodo;
}
function filterCompletedTodo() {
  completedTodo = todoArray.filter((todo) => {
    return todo.completed;
  });
  return completedTodo;
}
function clearCompletedTodo() {
  filterCompletedTodo();
  completedTodo.forEach((todo) => {
    deleteTodo(todo);
    storeTodo();
  });
}
export {activeTodo,completedTodo, filterActiveTodo, filterCompletedTodo, clearCompletedTodo}