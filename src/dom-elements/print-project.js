import { projects } from "../create-projects.js"
const sidebar = document.querySelector('.projects')

const renderProjectToDOM = (function() {
    const projectName = document.createElement("button")
    projectName.setAttribute('class','projectCards')
    projectName.textContent = `${projects[projects.length-1].name}`
    sidebar.appendChild(projectName);
})


export { renderProjectToDOM }
