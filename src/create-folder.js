import createTodoItems from "./create-to-do.js";

export default class createFolder{
    constructor(folderName, itemsArray){
        this.folderName = folderName;
        this.array = itemsArray;
    }
}

toDoCollection = new createFolder("nameReceived",[])

function addToDoListItems(collectionToDoItems){
    toDoCollection.array[toDoCollection.array] = new createTodoItems(itemName,description,dueDate,priority,notes)
}