
  //////////
 // Task //
//////////

import Status from "./status.js";
import Utility from "./utility.js";
import Edit from "./edit.js";

export default class Task {
    constructor(title, description, project, priority, date) {
        this.id = JSON.parse(localStorage.getItem('id')) + 1; // added unique identifier; 
        this.title = title;
        this.description = description;
        this.project = project; 
        this.priority = priority;
        this.date = date; 
        this.status = 'incomplete'; 
        Task.saveId(this.id);
    }
    static saveId(id) {
        const newId = id;
        localStorage.setItem('id', JSON.stringify(newId));  
    }
    static clearTaskList() {
        document.getElementById('task-list').innerHTML = ''; 
    }
    static createNewTaskList(list) {
        for(let i = 0; i < list.length; i++) {
            createTaskDom(list[i]);
        }
    }
}

export function createTask() {
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const project = document.getElementById('project-input').value;
    const priority = document.getElementById('priority-input').value;
    const date = document.getElementById('date-input').value;
    // const task = new Task(title, description, project, priority, date);
    const task = new Task('Homework', 'complete homework before 9pm', 'School', 'high', '2021-11-13'); // dummy values
    // const task = new Task('Workout', 'workout before poop', 'Gym', 'high', '2012-11-21'); // dummy values 
    createTaskDom(task);
    return task;
}

export function createTaskDom(obj) {
    const taskList = document.getElementById('task-list');
    const taskLi = document.createElement('li');
    taskLi.classList.add('todo-item-container');
    const taskContainer = document.createElement('div');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('todo-item');
    taskDiv.setAttribute('id', `${obj.id}`);
    // task details // 
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('task-info-div');
    // toggle display of info div
    taskDiv.addEventListener('click', () => {
        infoDiv.classList.toggle('show');
    });
    // two containers
    const infoContainer1 = document.createElement('div');
    infoContainer1.classList.add('info-container-1')
    // project title 
    const infoSpan = document.createElement('span');
    infoSpan.textContent = `Project: ${obj.project}`;
    // title
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'title-' + obj.id;
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input'); 
    titleInput.setAttribute('id', 'title-' + obj.id);
    titleInput.setAttribute('type', 'text'); 
    titleInput.setAttribute('readonly', 'readonly'); 
    titleInput.textContent = `${obj.title}`;
    titleInput.setAttribute('value', `${obj.title}`);
    titleInput.classList.add('detail-inputs-' + obj.id);
    // due date 
    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'date-' + obj.id;
    dateLabel.textContent = 'Due date:';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'date-' + obj.id);
    dateInput.classList.add('detail-inputs-' + obj.id);
    dateInput.setAttribute('type', 'date'); 
    dateInput.setAttribute('value', `${obj.date}`);
    dateInput.setAttribute('readonly', 'readonly');
    // priority 
    const selectLabel = document.createElement('label');
    selectLabel.htmlFor = 'priority-' + obj.id;
    selectLabel.textContent = 'Priority level:';
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority-' + obj.id);
    prioritySelect.classList.add('detail-inputs-' + obj.id);
    prioritySelect.setAttribute('value', obj.priority);
    prioritySelect.setAttribute('disabled', 'disabled');
    // options
    const priorityLow = document.createElement('option');
    priorityLow.setAttribute('value', 'low');
    priorityLow.textContent = 'Low'; 
    const priorityMedium = document.createElement('option');
    priorityMedium.setAttribute('value', 'medium'); 
    priorityMedium.textContent = 'Medium'; 
    const priorityHigh = document.createElement('option');
    priorityHigh.setAttribute('value', 'high');
    priorityHigh.textContent = 'High'; 
    prioritySelect.append(priorityLow, priorityMedium, priorityHigh);
    // default value for select element
    Utility.defaultValue(prioritySelect, obj.priority);
    const editBtn = document.createElement('button');
    editBtn.setAttribute('id', 'edit-btn');
    editBtn.innerHTML = '<span class="material-icons-outlined">edit</span>'; 
    editBtn.addEventListener('click', () => {
        Edit.toggleEdit(editBtn, obj.id); 
    });
    infoContainer1.append(
        infoSpan,
        titleLabel,
        titleInput,
        dateLabel,
        dateInput,
        selectLabel,
        prioritySelect,
    );
    // description input
    const descLabel = document.createElement('label');
    descLabel.htmlFor = 'description-' + obj.id;
    descLabel.textContent = 'Description:';
    const descInput = document.createElement('textarea');
    descInput.setAttribute('id', 'description-' + obj.id);
    descInput.classList.add('detail-inputs-' + obj.id); 
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('readonly', 'readonly'); 
    descInput.textContent = `${obj.description}`; 
    descInput.setAttribute('value', `${obj.description}`);
    infoDiv.append(
        infoContainer1,
        descLabel,
        descInput,
        editBtn
    )
    // container 1 
    const container1 = document.createElement('div');
    container1.classList.add('container-1');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.setAttribute('type', 'checkbox');
    const projectSpan = document.createElement('span');
    projectSpan.textContent = `${obj.title}`;
    if(obj.status === 'complete') {
        checkbox.checked = true;
        taskLi.classList.add('active');
    }
    checkbox.addEventListener('change', () => {
        taskLi.classList.toggle('active');
        infoDiv.classList.remove('show');
        if(checkbox.checked) {
            Status.toggleStatus(obj.id, 'complete');
        } else {
            Status.toggleStatus(obj.id, 'incomplete');
        }
    });
    container1.append(
        projectSpan,
        checkbox
    );
    // container 2 
    const container2 = document.createElement('div');
    container2.classList.add('container-2');
    const priorityDiv = document.createElement('div');
    const deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '<span class="material-icons-outlined"><a id="delete-icon" title="delete task" href="#">delete</a></span>';
    deleteIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.target.parentNode.parentNode.parentNode.parentNode.id;
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        deleteTodo(id);
    });
    container2.append(
        priorityDiv,
        deleteIcon
    ); 
    // priority level
    colorPriority(obj.priority, priorityDiv);
    taskList.appendChild(taskLi);
    taskLi.appendChild(taskContainer);
    taskContainer.append(
        taskDiv,
        infoDiv
    )
    taskDiv.append(
        container1,
        container2
    );
}

function deleteTodo(id) {
    const taskArr = JSON.parse(localStorage.getItem('tasks'));
    const index = taskArr.findIndex(task => task.id == id);
    taskArr.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(taskArr));
}

function colorPriority(priority, div) {
    switch(priority.toLowerCase()) {
        case 'high':
            div.style.backgroundColor = '#FF0000'; // #AB1D3D
            break;
        case 'medium':
            div.style.backgroundColor = '#FECD19';
            break;
        case 'low':
            div.style.backgroundColor = '#6FB202';
            break;
    }
}
