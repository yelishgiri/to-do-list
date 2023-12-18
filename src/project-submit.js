import { addProjects } from "./create-projects.js";
import { renderProjectToDOM } from "./dom-elements/print-project.js";


const callProjectSubmitButton = (function (){


    const projectName = document.querySelector('#projectName')
    const projectDialogSubmit = document.querySelector('.submitProject')
    const dialogProject = document.getElementById('formForProject')
    

    projectDialogSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        dialogProject.close();
        addProjects(projectName.value)
        renderProjectToDOM();

    })
}) 


export { callProjectSubmitButton }