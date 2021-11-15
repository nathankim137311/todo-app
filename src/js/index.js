import Utility from "./utility.js";
import { createTask } from "./task.js";
import Storage, { taskArr } from "./storage.js";
const addTaskLink = document.getElementById('add-task-link');
const addTaskBtn = document.getElementById('add-task-btn')

addTaskLink.addEventListener('click', (e) => {
    Utility.showForm(e);
});

addTaskBtn.addEventListener('click', () => {
    const task = createTask();
    Storage.saveTask(task);
    Storage.saveProject(task.project);
});