import { Project } from './Project';
import { ToDo } from './ToDo';

const saveProjectsToLocalStorage = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
};

const loadProjectsFromLocalStorage = () => {
    const projectsData = localStorage.getItem('projects');
    if (!projectsData) {
        return [];
    }

    const parsedProjects = JSON.parse(projectsData);

    return parsedProjects.map(projectData => {
        const project = new Project(projectData.name);
        projectData.todos.forEach(todoData => {
            const todo = new ToDo(
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority
            );
            project.addTodo(todo);
        });
        return project;
    });
};

export { saveProjectsToLocalStorage, loadProjectsFromLocalStorage };
