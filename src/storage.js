/* THIS MODULE HANDLES STORING OF TODO USING THE LOCAL STORAGE API */
import { todoArray } from "./todo";
export function storeTodo() { 
     console.log("Data stored.");
     localStorage.setItem("todoArray", JSON.stringify(todoArray));
}