/* THIS MODULE HANDLES USER SORTING OF TODOS BY DRAG AND DROP */
export function handleDragandDrop() {
const sortableItems = document.querySelectorAll(".todo-item");
const sortableList = document.querySelector(".todo-list");
sortableItems.forEach((item) => {
    item.addEventListener("dragstart", () => {
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
    });
});
sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener('dragenter', e => e.preventDefault())
  function initSortableList(e) {
    e.preventDefault();
    const belowMouseElement = getBelowMousePositionElement(
      sortableList,
      e.clientY
    );
    const draggable = document.querySelector(".dragging");
    if (belowMouseElement == null) {
      sortableList.appendChild(draggable);
    } else {
      sortableList.insertBefore(draggable, belowMouseElement);
    }
  }
}

//   get closest element that the mouse positon is directly before it i.e above that element
function getBelowMousePositionElement(container, y) {
  //   y is position of mouse on screen
  //   container is the sortable List of items
  const draggableElements = [
    // get an array of elements except element being dragged
    ...container.querySelectorAll(".todo-item:not(.dragging)"),
  ]; 
  const BelowMousePosition = draggableElements.reduce(
    // determines the position of the element the mouse is above;
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
    /*if the offset is negative (above the center) and greater than the closest offset found so far, 
    update the closest element to the current one.*/
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  );
  return BelowMousePosition.element;
}
