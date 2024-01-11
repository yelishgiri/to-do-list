import { projects } from "./create-projects.js";
import { addTodo } from "./create-to-do.js";
import { renderToDosToDom } from "./dom-elements/print-todos.js";

const callTaskSubmitButton = function (name) {
  console.log("hello");
  const dialogTask = document.getElementById("formForToDo");
  const taskDialogSubmit = document.querySelector(".submitTask");

  const taskName = document.querySelector("#taskName");
  const taskDescription = document.querySelector("#taskDescription");
  const taskDueDate = document.querySelector("#taskDueDate");
  const taskPriority = document.querySelector("#taskPriority");

  taskDialogSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    dialogTask.close();

    projects.forEach((object) => {
      const divContent = document.querySelector("#content");
      if (object.name === divContent.textContent)
        addTodo(
          taskName.value,
          taskDescription.value,
          taskDueDate.value,
          taskPriority.value,
        );
      renderToDosToDom();
    });
  });
};

export { callTaskSubmitButton };
