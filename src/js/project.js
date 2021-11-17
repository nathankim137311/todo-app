
  /////////////
 // Project //
/////////////

import Task, { createTaskDom } from "./task";
import Utility from "./utility";

export default class Project {
    static createProject(projectArr) {
        const projectList = document.getElementById('project-list');
        Utility.removeAllChildNodes(projectList);
        for(let i = 0; i < projectArr.length; i++) {
            const projectLi = document.createElement('li');
            const projectA = document.createElement('a');
            projectA.setAttribute('id', `project-${projectArr[i]}`);
            projectA.setAttribute('href', '#');
            projectA.textContent = `${projectArr[i]}`;
            const projectHeading = document.getElementById('project-heading');

            projectA.addEventListener('click', () => {
                const projectName = projectA.textContent;
                projectHeading.textContent = projectName;
                Task.clearTaskList();
                const newTaskList = Utility.filter(projectName);
                Task.createNewTaskList(newTaskList);
            });

            const allTasks = document.getElementById('all-tasks');

            allTasks.addEventListener('click', () => {
                projectHeading.textContent = allTasks.textContent;
                Task.clearTaskList();
                const taskArr = JSON.parse(localStorage.getItem('tasks'));
                for(let i = 0; i < taskArr.length; i++) {
                    createTaskDom(taskArr[i]);
                }
            });

            projectList.appendChild(projectLi);
            projectLi.appendChild(projectA);
        }
    }
}