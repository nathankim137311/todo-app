  
  /////////////
 // Storage //
/////////////

import { createTaskDom } from "./task.js";
import Project from "./project.js";
import Status from "./status.js";

export let taskArr = [];
export let projectArr = [];

export default class Storage {
    static saveTask(task) {
        taskArr.push(task);
        localStorage.setItem('tasks', JSON.stringify(taskArr));
    }
    static saveProject(project) {
        projectArr.push(project);
        const uniqueProjects = [...new Set(projectArr)]; 
        localStorage.setItem('projects', JSON.stringify(uniqueProjects));
        return uniqueProjects;
    }
}

export class Load extends Storage {
    static itemsFromStorage() {
        this.tasks();
        this.projects();
        this.loadCheckBoxes();
    }
    static tasks() {
        if(localStorage.getItem('tasks') === null) {
            taskArr = []; 
        } else {
            taskArr = JSON.parse(localStorage.getItem('tasks'));
            this.loadTasks(taskArr); 
        }
    }
    static projects() {
        if(localStorage.getItem('projects') === null) {
            projectArr = []; 
        } else {
            projectArr = JSON.parse(localStorage.getItem('projects'));
            this.loadProjects(projectArr);
        }
    }
    static loadTasks(taskArr) {
        for(let i = 0; i < taskArr.length; i++) {
            createTaskDom(taskArr[i]);
        }
    }
    static loadProjects(projectArr) {
        Project.createProject(projectArr);
    }
    static loadCheckBoxes() { // might not be the best place to put this here
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
}

