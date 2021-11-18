  
  /////////////
 // Counter //
///////////// 

import Utility from "./utility";

export default class Counter {
    static createCounters() {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        const newArr = taskArr.map(a => a.project);
        const returnArr = Utility.getOccAndNames(newArr);
        const occurrences = returnArr[0];
        const projectNames = returnArr[1];
        this.addCountersToDom(projectNames, occurrences);
        this.addOccToInbox(occurrences);
    }
    static addCountersToDom(names, occurrences) {
        for (let i = 0; i < names.length; i++) {
            const projectLink = document.getElementById(`${names[i]}`);
            const numDiv = document.createElement('div');
            numDiv.classList.add('project-counter');
            const numP = document.createElement('p');
            numP.classList.add('counter-integer');
            numDiv.appendChild(numP);
            projectLink.appendChild(numDiv);
            numP.textContent = `${occurrences[i]}`;
        }
    }
    static addOccToInbox(occurrences) {
        const total = Utility.findSumOfArray(occurrences);
        const allTasksLi = document.getElementById('all-tasks-container');
        const allTasksDiv = document.createElement('div');
        const allTasksP = document.createElement('p');
        allTasksP.classList.add('counter-integer');
        allTasksP.textContent = total;
        allTasksDiv.classList.add('project-counter');
        allTasksDiv.appendChild(allTasksP);
        allTasksLi.appendChild(allTasksDiv);
    }
    static updateCounters() {
        document.querySelectorAll('.project-counter').forEach(e => e.remove());
        this.createCounters();
    }
}