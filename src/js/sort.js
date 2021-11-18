
  //////////
 // Sort // 
//////////

import { createTaskDom } from "./task.js";
import Task from "./task.js";

let sort = false; 

export default class Sort {
    static sortDateClosest() {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        taskArr.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        Task.clearTaskList();
        for(let i = 0; i < taskArr.length; i++) {
            createTaskDom(taskArr[i]);
        }
        sort = true;
    }
    static sortDateFurthest() {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        taskArr.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        taskArr.reverse();
        Task.clearTaskList();
        for(let i = 0; i < taskArr.length; i++) {
            createTaskDom(taskArr[i]);
        }
        sort = false;
    }
    static toggleSort() {
        sort ? this.sortDateFurthest() : this.sortDateClosest();
    }
}