import { projects } from "../create-projects.js"
const sidebar = document.querySelector('.projects')
const content = document.querySelector('#content')
const renderProjectToDOM = (function() {
    if(document.contains(document.getElementById(`${projects.name}`))){
        document.getElementById(`${project.name}`).remove();
    }
    const projectName = document.createElement('button')
    projectName.setAttribute('class','projectCards')
    projectName.textContent = `${projects[projects.length-1].name}`
    const projectDiv = document.createElement('div')
    projectDiv.setAttribute('id',`${projectName.textContent}`)   
    sidebar.appendChild(projectName);
    if(document.contains(document.getElementById('tasks')))
    {
        document.getElementById('tasks').remove()
        content.appendChild(projectDiv)
    }


    // To remove if their exists task already on the screen
    
})


export { renderProjectToDOM }
