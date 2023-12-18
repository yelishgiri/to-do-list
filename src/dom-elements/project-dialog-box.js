const renderProjectDialogBox = (function() {


    const projectDialogButton = document.querySelector('.createProject')
    const projectDialogCloseButton = document.querySelector('.closeProject')
    const projectDialogSubmit = document.querySelector('.submitProject')
    const dialogProject = document.getElementById('formForProject')
    let execution = false;


    projectDialogButton.addEventListener("click", () => {
        dialogProject.showModal();
    })

    projectDialogCloseButton.addEventListener("click",() => {
        dialogProject.close();
    })

     projectDialogSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        dialogProject.close();
        execution = true;
    })

 return execution;
})


export { renderProjectDialogBox }