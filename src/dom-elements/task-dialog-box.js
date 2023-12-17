const rendorTaskDialogBox = (function (){

const taskDialogButton = document.querySelector('.createTask')
const taskDialogCloseButton = document.querySelector('.closeTask')
const taskDialogSubmit = document.querySelector('.submitTask')
const dialogTask = document.getElementById('formForToDo') 

taskDialogButton.addEventListener("click", () => {
    dialogTask.showModal();
})


taskDialogCloseButton.addEventListener("click", () => {
    dialogTask.close();
})
});


export { rendorTaskDialogBox }