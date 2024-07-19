/*THIS MODULE HANDLES THE CREATION OF NEW TODOS AND THEIR METHODS USING CLASS*/
import { storeTodo } from "./storage";
const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];
class Todo {
  constructor(todo) {
    this.text = todo;
    this.completed = false;
  }
}
function createNewTodo(todo) {
  let todoArrayItem = new Todo(todo.value);
  todoArray.push(todoArrayItem);
  return console.log(todoArray);
}

function deleteTodo(todo) {
  let index = todoArray.indexOf(todo);
  todoArray.splice(index, 1);
  storeTodo();
  console.log(todoArray);
  return todoArray;
}
export{todoArray,createNewTodo,deleteTodo}