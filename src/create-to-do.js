import { projects } from "./create-projects";

class createTodo {
  constructor(itemName, description, dueDate, priority, notes) {
    this.item = itemName;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}
const addTodo = function (itemName, description, dueDate, priority, notes) {
  projects.forEach((object) => {
    const divContent = document.querySelector("#content");
    console.log(divContent.textContent);
    if (object.name === divContent.textContent) {
      object.todoItems[object.todoItems.length] = new createTodo(
        itemName,
        description,
        dueDate,
        priority,
        notes,
      );
      console.log(object.todoItems);
    }
  });
};

export { addTodo };
