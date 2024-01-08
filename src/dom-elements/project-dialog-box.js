const renderProjectDialogBox = function () {
  const projectDialogButton = document.querySelector(".sidebarProject");
  const projectDialogCloseButton = document.querySelector(".closeProject");
  const dialogProject = document.getElementById("formForProject");

  projectDialogButton.addEventListener("click", () => {
    dialogProject.showModal();
  });

  projectDialogCloseButton.addEventListener("click", () => {
    dialogProject.close();
  });
};

export { renderProjectDialogBox };
