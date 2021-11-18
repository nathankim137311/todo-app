  
  ////////// 
 // Date // 
//////////

import Task from "./task.js";
import { createTaskDom } from "./task.js";
import Utility from "./utility.js";

export default class Date {
    static today() {
        const currentDate = Utility.getCurrentDate();
        const todayTasks = Utility.sortByToday(currentDate);
        if(todayTasks.length !== 0) {
            Task.clearTaskList();
            for(let i = 0; i < todayTasks.length; i++) {
                createTaskDom(todayTasks[i]);
            }
        } 
    }
}