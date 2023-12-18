const projects = []


class Projects{
    constructor(name)
    {
        this.name = name
    }
    todoItems = []
}




    projects[projects.length] = new Projects("Home")
const addProjects = function (name) {
    projects[projects.length] = new Projects(name)
    console.log(projects);
}


export { addProjects, projects }