//  this module handles DOM manipulation and UI interaction of the todo app
import "./style.css";
// imported variables from the othher modules
import { todoArray } from "./todo.js";
import { newTodo } from "./todo.js";
import { activeTodo} from "./filter";
import { completedTodo } from "./filter";
import { createNewTodo } from "./todo.js";
import { filterActiveTodo } from "./filter";
import { filterCompletedTodo } from "./filter";
import { clearCompletedTodo } from "./filter";
// DOM ELEMENTS
const todoList = document.querySelector(".todo-list");
const Buttons = document.querySelectorAll("button");
const activeTodoCounter = document.querySelector('.todo-counter');
// DOM EVENT LISTENERS
// Add New todo
  newTodo.addEventListener("keydown", handleAddTodo);
//Button events
Buttons.forEach((button)=>{
  button.addEventListener('click', (e)=>{
    // filter by active
  if (e.target.id=== "active"){
      filterActiveTodo()
      displayTodo(activeTodo)
    }  
    // filter by completed todo
  else if (e.target.id=== "completed"){
      filterCompletedTodo();
      displayTodo(completedTodo);
    }
    // clear completed todo
    else if (e.target.id === "clear"){
      clearCompletedTodo();
      displayTodo(todoArray);
    }
    // display all todo;
  else{
    displayTodo(todoArray);
  }
})
})

// event functions
    function handleAddTodo(e) {
      if (e.key === "Enter" || e.code === "Enter") {
        createNewTodo();
        displayTodo(todoArray);
        newTodo.value = "";
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
    // add element classes
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
    // add the checkbox
    checkTodo.type = "checkbox";
    checkTodo.classList.add("custom-check");
    checkTodo.checked = todo.completed;
    todoInfo.classList.add(
      "todo-info",
      "w-[76%]"
    );
    todoInfo.setAttribute('draggable', true)
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
      console.log(todoArray);
    });
    // handle delete button event
    deleteTodoButton.addEventListener("click", () => {
      todo.deleteTodo();
      getNumberOfActiveTodo();
      todoList.removeChild(todoItem);
    });
  todoList.firstChild.classList.add("rounded-t-lg");
  }

function showTodoStatus(checkbox,todoText) {
  if (checkbox.checked === true) {
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
    console.log("unchecked");
  }
}

function getNumberOfActiveTodo() {
  filterActiveTodo();
  activeTodoCounter.textContent = activeTodo.length;
  return activeTodo.length;
}
