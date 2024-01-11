import { projects } from "../create-projects.js";
import { remove } from "../functionality/remove.js";

const renderToDosToDom = function () {
  projects.forEach((object) => {
    const divContent = document.querySelector("#content");
    if (object.name === divContent.textContent) {
      const appendDiv = document.querySelector(".contentTask");
      console.log(appendDiv);
      object.todoItems.forEach((object) => {
        const div = document.createElement("div");
        div.setAttribute("id", "divContent");
        const divTask = document.createElement("div");
        const divDescription = document.createElement("div");
        const divDuedate = document.createElement("div");
        const divPriority = document.createElement("div");
        divTask.textContent = `Task: ${object.item}`;
        divDescription.textContent = `Description: ${object.description}`;
        divDuedate.textContent = `Due Date: ${object.dueDate}`;
        divPriority.textContent = `Priority: ${object.priority}`;
        div.append(divTask, divDescription, divDuedate, divPriority);
        appendDiv.appendChild(div);
        remove();
      });
    }
  });
};

export { renderToDosToDom };
