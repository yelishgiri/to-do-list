import { projects } from "./create-projects.js";

 class createTodo {
    constructor(itemName,description,dueDate,priority,notes){
        this.item = itemName;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority;
        this.notes = notes;
    }

    
}


const addTodo = (function(itemName, description, dueDate, priority, notes){
    projects.forEach((object) => {
        object.todoItems[object.todoItems.length] = new createTodo(itemName, description, dueDate, priority, notes)
        console.log(object.todoItems[length]);

    })
})

export { addTodo }




