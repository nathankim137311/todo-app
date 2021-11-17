  
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
    /*
    static updateCounters() {
        this.allTasksCounter();
        this.createCounters();
        this.displayCounters();
    }
    static allTasksCounter() {
        const totalTasks = JSON.parse(localStorage.getItem('tasks')).length;
        const allTasksP = document.getElementById('total-number');
        allTasksP.textContent = ' ' + totalTasks;
    }
    static createCounters() {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        const newArr = [];
        for(let i = 0; i < taskArr.length; i++) {
            newArr.push(taskArr[i].project);
        }
        const count = this.findOcc(newArr);
        localStorage.setItem('counters', JSON.stringify(count)); 
    }
    static findOcc(newArr) {
        const count = {};
        newArr.forEach(el => {
            count[el] = count[el] + 1 || 1
        }); 
        return count;
    }
    static displayCounters() {
        const countersKeys = Object.keys(JSON.parse(localStorage.getItem('counters')));
        const projectsArr = JSON.parse(localStorage.getItem('projects')); 
        for(let i = 0; i < projectsArr.length; i++) {
            if(projectsArr[i] === countersKeys[i]) {
                this.setCounter(i); 
            } else {
                this.setCounterZero(i);
            }
        }
    }
    static setCounter(num) {
        const countsP = [...document.querySelectorAll('.counts')];
        const counterValues = Object.values(JSON.parse(localStorage.getItem('counters')));
        countsP[num].textContent = counterValues[num]; 
    }
    static setCounterZero(num) {
        const countsP = [...document.querySelectorAll('.counts')];
        countsP[num].textContent = '0'; 
    }
    */
}