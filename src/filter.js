/*this module handles sorting of todos and 
  app interaction based on sorting
*/
import { todoArray } from "./todo";
export let activeTodo;
export let completedTodo;

export function filterActiveTodo(){
   activeTodo = todoArray.filter((todo)=> {
    return !todo.completed
  })
    return activeTodo;
}
export function filterCompletedTodo(){
   completedTodo = todoArray.filter((todo)=>{
    return todo.completed
  })
  return completedTodo;
}

export function clearCompletedTodo(){
  filterCompletedTodo();
  completedTodo.forEach(todo => todo.deleteTodo())
}

