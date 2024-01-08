import { projects } from "../create-projects";

const remove = function () {
  const contentDiv = document.querySelector("#divContent");
  console.log(contentDiv);
  projects.forEach((object) => {
    const n = object.todoItems.length;
    console.log(n);
    contentDiv.dataset.indexNumbers = n;
  });
  const removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "remove");
  removeBtn.style.cssText = "border-radius: 6px; width: 100px; height: 25px;";
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    projects.forEach((object) => {
      const index = contentDiv.dataset.indexNumbers;
      object.todoItems.splice(index - 1, 1);
      contentDiv.remove();
    });
  });

  contentDiv.appendChild(removeBtn);
};

export { remove };
