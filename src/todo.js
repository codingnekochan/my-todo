// this module handles the logic of adding and removing todos from the array.
export const todoArray = [];
export const newTodo = document.getElementById("new-todo");
class Todo {
  constructor() {
    this.todo = newTodo.value;
    this.completed = false;
  }
  deleteTodo() {
    let index = todoArray.indexOf(this);
    todoArray.splice(index, 1);
    return todoArray;
  }
  changeStatus() {
    this.completed =
      this.completed === false
        ? (this.completed = true)
        : (this.completed = false);
  }
}
export function createNewTodo() {
  let todoArrayItem = new Todo();
  todoArray.push(todoArrayItem);
  return console.log(todoArray);
}

