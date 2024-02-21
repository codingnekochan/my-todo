//  this module handles DOM manipulation and UI interaction of the todo app
import "./style.css";
// imported variables from the othher modules
import { todoArray } from "./todo.js";
import { newTodo } from "./todo.js";
import { activeTodo, filterCompletedTodo } from "./filter";
import { completedTodo } from "./filter";
import { createNewTodo } from "./todo.js";
import { filterActiveTodo } from "./filter";

// Add New todo event
    newTodo.addEventListener("keydown", handleAddTodo);
// event functions
    function handleAddTodo(e) {
      if (e.key === "Enter" || e.code === "Enter") {
        createNewTodo();
        displayTodo(todoArray);
        newTodo.value = "";
      }
}
const todoList = document.querySelector(".todo-list");
const filterButtons = document.querySelectorAll('button');
filterButtons.forEach((button)=>{
  button.addEventListener('click', (e)=>{ 
  if (e.target.id=== "active"){
      filterActiveTodo()
      displayTodo(activeTodo)
    }  
    else if (e.target.id=== "completed"){
      filterCompletedTodo();
      displayTodo(completedTodo);
    }
  else{
    displayTodo(todoArray);
  }
})
})
// DOM functions;
function displayTodo(currentArray) {
  // clear list
   todoList.innerHTML = "";
   currentArray.forEach( (todo) => {
    updateTodoList(todo)
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
    // handle the checkbox
    checkTodo.type = "checkbox";
    checkTodo.classList.add("custom-check");
    checkTodo.checked = todo.completed;
    todoInfo.classList.add(
      "todo-info",
      "w-[76%]"
    );
    todoStatus(checkTodo, todoInfo);
    // handle the todo button
    deleteTodoButton.classList.add("delete-item");
    // append elements
    todoList.insertAdjacentElement("afterbegin", todoItem);
    todoItem.appendChild(checkTodo);
    todoItem.appendChild(todoInfo);
    todoItem.appendChild(deleteTodoButton);
    // element content;
    todoInfo.textContent = todo.todo;
    // handle the event listeners for the eachtodo items;
    checkTodo.addEventListener("change", (e) => {
      todo.changeStatus();
      todoStatus(checkTodo, todoInfo);
      console.log(todoArray);
    });
    deleteTodoButton.addEventListener("click", () => {
      todo.deleteTodo();
      todoList.removeChild(todoItem);
    });
  todoList.firstChild.classList.add("rounded-t-lg");
  }


function todoStatus(checkbox,todoText) {
  // let todoInfo = checkbox.nextElementSibling;
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