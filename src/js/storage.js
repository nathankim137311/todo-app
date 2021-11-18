  
  /////////////
 // Storage //
/////////////

import { createTaskDom } from "./task.js";
import Project from "./project.js";
import Counter from "./counter.js";
import Indicator from "./indicator.js";
import Utility from "./utility.js";

export let taskArr = [];
export let projectArr = [];
export let counterArr = [];

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
        this.counters();
        this.indicator();
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
    static counters() {
        if(localStorage.getItem('tasks') === null) {
            taskArr = []; 
        } else {
            Counter.createCounters();
        }
    }
    static indicator() {
        if(localStorage.getItem('tasks') === null) {
            taskArr = []; 
        } else {
            if(Utility.sortByToday(Utility.getCurrentDate()) !== false) {
                Indicator.redIndicator();
            }
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
}

