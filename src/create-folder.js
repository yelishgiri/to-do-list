import { remove } from "./functionality/remove-method.js"
import { renderProjectDialogBox } from "./dom-elements/project-dialog-box.js"



class CreateFolders {
    constructor()
    {
        this.folders = [];
    }
    addFolders(name){
        this.folders.push({
            name: name,
            toDoItems: []
        })

    }

}

console.log(new CreateFolders.prototype.addFolders("John"));

export { CreateFolders }
