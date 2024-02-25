//  this module handles DOM manipulation, events and UI interaction of the todo app
import "./style.css";
// imported variables from the othher modules
import { todoArray, newTodo, createNewTodo } from "./todo.js";
import { activeTodo, completedTodo, filterActiveTodo, filterCompletedTodo, clearCompletedTodo} from "./filter.js";
import { handleDragandDrop } from "./dragdrop.js";
// DOM ELEMENTS
const htmlBody = document.querySelector('html')
const todoList = document.querySelector(".todo-list");
const Buttons = document.querySelectorAll("button");
const activeTodoCounter = document.querySelector('.todo-counter');
// DOM EVENT LISTENERS
// Add New todo
  newTodo.addEventListener("keydown", handleAddTodo);
//Button events
Buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
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

// event functions
    function handleAddTodo(e) {
      if (e.key === "Enter" || e.code === "Enter") {
        createNewTodo();
        displayTodo(todoArray);
        newTodo.value = "";
        handleDragandDrop()
        ;

      }
}

// DOM functions;
function displayTodo(currentArray) {
  // clear list
   todoList.innerHTML = "";
   currentArray.forEach((todo) => {
    updateTodoList(todo)
    getNumberOfActiveTodo();
  }
  )
}
function updateTodoList(todo){
  // create elements
    let todoItem = document.createElement("div");
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
    )
    todoItem.setAttribute('draggable', true)
    // add the checkbox
    checkTodo.type = "checkbox";
    checkTodo.classList.add("custom-check");
    checkTodo.checked = todo.completed;
    todoInfo.classList.add(
      "todo-info",
      "w-[76%]"
    );
    showTodoStatus(checkTodo, todoInfo);
    // add the todo button
    deleteTodoButton.classList.add("delete-item");
    // append elements
    todoList.insertAdjacentElement("afterbegin", todoItem);
    todoItem.appendChild(checkTodo);
    todoItem.appendChild(todoInfo);
    todoItem.appendChild(deleteTodoButton);
    // element content;
    todoInfo.textContent = todo.todo;
    // handle the event listeners for the eachtodo items;
    // handle checkbox event
    checkTodo.addEventListener("change", () => {
      todo.changeStatus();
      showTodoStatus(checkTodo, todoInfo)
      getNumberOfActiveTodo();
      // console.log(todoArray);
    });
    // handle delete button event
    deleteTodoButton.addEventListener("click", () => {
      todo.deleteTodo();
      getNumberOfActiveTodo();
      todoList.removeChild(todoItem);
    });
  }
function showTodoStatus(checkbox,todoText) {
  if (checkbox.checked) {
    todoText.classList.add("completed");
    todoText.classList.remove(
      "text-l-very-dark-grey-blue",
      "dark:text-d-light-grey-blue"
    );
    console.log("checked");
  } else {
    todoText.classList.remove("completed");
    todoText.classList.add(
      "text-l-very-dark-grey-blue",
      "dark:text-d-light-grey-blue"
    );
    // console.log("unchecked");
  }
}

function getNumberOfActiveTodo() {
  filterActiveTodo();
  activeTodoCounter.textContent = activeTodo.length;
  return activeTodo.length;
}
function toggleDarkMode(){
 htmlBody.classList.toggle('dark');
 console.log('enabled')
}
