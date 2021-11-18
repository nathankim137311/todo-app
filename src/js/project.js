
  /////////////
 // Project //
/////////////

import Indicator from "./indicator";
import Task, { createTaskDom } from "./task.js";
import Utility from "./utility.js";
import Date from "./date.js";

export default class Project {
    static createProject(projectArr) {
        const projectList = document.getElementById('project-list');
        const projectHeading = document.getElementById('project-heading');
        Utility.removeAllChildNodes(projectList);
        for(let i = 0; i < projectArr.length; i++) {
            const projectLi = document.createElement('li');
            const projectDiv = document.createElement('div');
            projectDiv.setAttribute('id', `${projectArr[i]}`);
            const projectA = document.createElement('a');
            projectA.setAttribute('href', '#');
            projectA.textContent = `${projectArr[i]}`;
            projectDiv.appendChild(projectA);
            projectA.addEventListener('click', () => {
                const projectName = projectA.textContent;
                projectHeading.textContent = projectName;
                Task.clearTaskList();
                const newTaskList = Utility.filter(projectName);
                Task.createNewTaskList(newTaskList);
            });
            projectList.appendChild(projectLi);
            projectLi.appendChild(projectDiv);
        }
        const allTasks = document.getElementById('all-tasks');
        allTasks.addEventListener('click', () => {
            projectHeading.textContent = allTasks.textContent;
            Task.clearTaskList();
            const taskArr = JSON.parse(localStorage.getItem('tasks'));
            for(let i = 0; i < taskArr.length; i++) {
                createTaskDom(taskArr[i]);
            }
        });
        const today = document.getElementById('today');
        today.addEventListener('click', () => {
            projectHeading.textContent = today.textContent;
            Date.today();
        });
    }
}