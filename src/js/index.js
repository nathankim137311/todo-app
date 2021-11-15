import Utility from "./utility.js";
import { createTask } from "./task.js";
import Storage from "./storage.js";
import Project from "./project.js";
const addTaskLink = document.getElementById('add-task-link');
const addTaskBtn = document.getElementById('add-task-btn');
const projectLink = document.getElementById('project-link');

addTaskLink.addEventListener('click', (e) => {
    Utility.showForm(e);
});

addTaskBtn.addEventListener('click', () => {
    const task = createTask();
    Project.createProject(task.project); 
    Storage.saveTask(task);
    Storage.saveProject(task.project);
});

projectLink.addEventListener('click', () => {
    const projectList = document.getElementById('project-list');
    projectList.classList.toggle('active');
}); 
