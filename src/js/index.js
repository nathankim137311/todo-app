import showForm from "./animation.js";
import { createTask, createTaskDom } from "./task.js";
const addTaskLink = document.getElementById('add-task-link');
const addTaskBtn = document.getElementById('add-task-btn')

addTaskLink.addEventListener('click', (e) => {
    showForm(e);
});

addTaskBtn.addEventListener('click', () => {
    createTask();
});