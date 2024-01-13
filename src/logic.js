let TodoList = [];
class Todo {
  constructor(newTodo, todoStatus) {
    this.todo = newTodo;
    this.completed = false;
  }
  display() {
    console.log(`${this.todo} is now added`);
  }
  delete(index) {
    index = TodoList.indexOf(this);
    return TodoList.splice(index, 1);
  }
  changeStatus() {
    this.completed =
      this.completed === false
        ? (this.completed = true)
        : (this.completed = false);
  }
}
function createNewTodo(newTodo) {
  let todoItem = new Todo(newTodo);
  TodoList.push(todoItem);
  return console.log(TodoList);
}
function deleteTodo(index) {
  let todoItem = TodoList[index];
  todoItem.delete();
  return console.log(TodoList);
}
function changeTodoStatus(index) {
  let todoItem = TodoList[index];
  todoItem.changeStatus();
  return console.log(TodoList);
}

createNewTodo("go to the market");
createNewTodo("sweep the floors");
createNewTodo("eat lunch");
createNewTodo("finish this damn project");
createNewTodo("kill Abdull");
deleteTodo(1);
deleteTodo(3);
TodoList[0].display();
changeTodoStatus(1);
changeTodoStatus(0);
// changeTodoStatus(1);
