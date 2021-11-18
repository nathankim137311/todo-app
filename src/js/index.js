import Utility from "./utility.js";
import { createTask } from "./task.js";
import Storage from "./storage.js";
import Project from "./project.js";
import { Load } from "./storage.js";
import Counter from "./counter.js";
import Sort from "./sort.js";
const form = document.getElementById('form');
const addTaskLink = document.getElementById('add-task-link');
const addTaskBtn = document.getElementById('add-task-btn');
const projectLink = document.getElementById('project-link');
const sortPriority = document.getElementById('sort-priority');
const sortDate = document.getElementById('sort-date');

// when page loads 
window.onload = function() {
    Load.itemsFromStorage();
}

form.addEventListener('click', (e) => {
    e.preventDefault();
});

addTaskLink.addEventListener('click', (e) => {
    Utility.showForm(e);
});

addTaskBtn.addEventListener('click', () => {
    const task = createTask();
    Storage.saveTask(task);
    const projectArr = Storage.saveProject(task.project);
    Project.createProject(projectArr);
    Counter.updateCounters()
});

projectLink.addEventListener('click', () => {
    const projectList = document.getElementById('project-list');
    projectList.classList.toggle('active');
}); 

sortPriority.addEventListener('click', () => {
    console.log('sort priority');
});

sortDate.addEventListener('click', () => {
    Sort.toggleSort();
});

