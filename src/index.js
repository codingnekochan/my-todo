/*THIS MODULE HANDLES DOM, UI AND EVENTS OF THE WEB APP */
// Imports
import "./style.css";
import { Todo, todoArray, createNewTodo, deleteTodo, updateStatus } from "./todo.js";
import {
  activeTodo,
  completedTodo,
  filterActiveTodo,
  filterCompletedTodo,
  clearCompletedTodo,
} from "./filter.js";
import { handleDragandDrop } from "./dragdrop.js";
import { storeTodo, getTodo, handleStorage } from "./storage.js";
// DOM Elements
const htmlBody = document.querySelector("html");
const todoList = document.querySelector(".todo-list");
const newTodo = document.getElementById("new-todo");
const appButtons = document.querySelectorAll("button");
const activeTodoCounter = document.querySelector(".todo-counter");
// Event Listener
// add new todo
newTodo.addEventListener("keydown", handleAddTodo);
//all button events
appButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "active":
        filterActiveTodo();
        displayTodo(activeTodo);
        break;

      case "completed":
        filterCompletedTodo();
        displayTodo(completedTodo);
        break;

      case "clear":
        clearCompletedTodo();
        displayTodo(todoArray);
        break;

      case "toggle":
        toggleDarkMode();
        break;

      default:
        displayTodo(todoArray);
        break;
    }
  });
});
// DOM functions;
function handleAddTodo(e) {
  if (e.key === "Enter" || e.code === "Enter") {
    createNewTodo(newTodo);
    storeTodo();
    displayTodo(todoArray);
    newTodo.value = "";
    newTodo.focus()
  }
}
function displayTodo(currentArray) {
  todoList.innerHTML = "";
  currentArray.forEach((todo) => {
    renderTodoList(todo);
    getNumberOfActiveTodo();
    handleDragandDrop()
  });
}
function renderTodoList(todo) {
  // create elements
  let todoItem = document.createElement("li");
  let checkTodo = document.createElement("input");
  let todoInfo = document.createElement("p");
  let deleteTodoButton = document.createElement("button");
  // add element classes and attributes
  todoItem.classList.add(
    "todo-item",
    "flex",
    "justify-between",
    "items-center",
    "p-3",
    "bg-l-very-light-grey",
    "dark:bg-d-very-dark-desaturated-blue",
    "dark:border-d-very-dark-grey-blue"
  );
  todoItem.setAttribute("draggable", true);
  todoInfo.classList.add("todo-info");
  // add the checkbox
  checkTodo.type = "checkbox";
  checkTodo.classList.add("custom-check");
  checkTodo.checked = todo.completed;
  showTodoStatus(todo, checkTodo, todoInfo);
  // add the todo buttons
  deleteTodoButton.classList.add("delete-item");
  // append elements
  todoList.insertAdjacentElement("afterbegin", todoItem);
  todoItem.appendChild(checkTodo);
  todoItem.appendChild(todoInfo);
  todoItem.appendChild(deleteTodoButton);
  // element content;
  todoInfo.textContent = todo.text;
  // Handle The Event Listeners for Each Todo Item;
  // handle checkbox event
  checkTodo.addEventListener("change", () => {
    todo.completed = !todo.completed;
    showTodoStatus(todo,checkTodo,todoInfo);
    getNumberOfActiveTodo();
    storeTodo()
  });
  // handle delete button event
  deleteTodoButton.addEventListener("click", () => {
    deleteTodo(todo);
    displayTodo(todoArray);
    getNumberOfActiveTodo();
  });
}
function showTodoStatus(todo,checkbox,todoText) {
  if(todo.completed === true && checkbox.checked === true) {
    todoText.classList.add("completed");
    todoText.classList.remove(
      "text-l-very-dark-grey-blue",
      "dark:text-d-light-grey-blue"
    );
  } else {

    todoText.classList.remove("completed");
    todoText.classList.add(
      "text-l-very-dark-grey-blue",
      "dark:text-d-light-grey-blue"
    );
  }
}
function getNumberOfActiveTodo() {
  filterActiveTodo();
  activeTodoCounter.textContent = activeTodo.length;
}
function toggleDarkMode() {
  htmlBody.classList.toggle("dark");
}
// storeTodo();
displayTodo(todoArray);
