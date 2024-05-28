function Project(name) {
    this.name = name;

    let newProject = document.createElement('p');
    newProject.textContent = `${this.name}`;

    return newProject;
};

export { Project };