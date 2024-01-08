const projects = [];

class Projects {
  constructor(name) {
    this.name = name;
  }
  todoItems = [];
}

const addProjects = function (name) {
  projects[projects.length] = new Projects(name);
  console.log(projects);
};

export { addProjects, projects };
