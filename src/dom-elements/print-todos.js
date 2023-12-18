import { projects } from "../create-projects.js";
const tasksContent = document.querySelector('.tasks')

const renderToDosToDom = (function() {
    projects.forEach((object) => {
        value = object.name
        const value = document.createElement('div')
        object.todoItems.forEach((object) => {
            const div = document.createElement('div')
            div.textContent = `${object.taskName.value}`
            tasksContent.append(div)
        }
        )
    })

})


export { renderToDosToDom }
