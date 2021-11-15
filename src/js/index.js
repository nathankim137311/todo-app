import Utility from "./utility.js";
import { createTask } from "./task.js";
import Storage from "./storage.js";
import Project from "./project.js";
import { Load } from "./storage.js";
import Status from "./status.js";
const form = document.getElementById('form');
const addTaskLink = document.getElementById('add-task-link');
const addTaskBtn = document.getElementById('add-task-btn');
const projectLink = document.getElementById('project-link');

// when page loads 
window.onload = function() {
    Load.itemsFromStorage();
    checkBox();
}

function checkBox() {
    const allCheckBox = document.querySelectorAll('.checkbox');
    allCheckBox.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            if(e.target.checked) {
                Status.toggleStatus(e.target.parentNode.parentNode.id, 'complete');
            } else {
                Status.toggleStatus(e.target.parentNode.parentNode.id, 'incomplete');
            }
        });
    });
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
    Storage.saveStatus(task.status);
});

projectLink.addEventListener('click', () => {
    const projectList = document.getElementById('project-list');
    projectList.classList.toggle('active');
}); 
