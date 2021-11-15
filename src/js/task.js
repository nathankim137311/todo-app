
  //////////
 // Task //
//////////

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
}

export function createTask() {
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const project = document.getElementById('project-input').value;
    const priority = document.getElementById('priority-input').value;
    const date = document.getElementById('date-input').value;
    // const task = new Task(title, description, project, priority, date);
    const task = new Task('Homework', 'complete homework before 9pm', 'School', 'high', '11/13/21'); // dummy values
    createTaskDom(task);
    return task;
}

export function createTaskDom(obj) {
    const taskList = document.getElementById('task-list');
    const taskLi = document.createElement('li');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('todo-item');
    // container 1 
    const container1 = document.createElement('div');
    container1.classList.add('container-1');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.setAttribute('type', 'checkbox');
    const span1 = document.createElement('span');
    span1.textContent = obj.title;
    container1.append(
        checkbox,
        span1
    );
    // container 2 
    const container2 = document.createElement('div');
    container2.classList.add('container-2');
    const priorityDiv = document.createElement('div');
    const span2 = document.createElement('span');
    span2.innerHTML = '<span class="material-icons-outlined"><a title="delete task" href="#">delete</a></span>';
    container2.append(
        priorityDiv,
        span2
    ); 
    // priority level
    colorPriority(obj.priority, priorityDiv);
    taskList.appendChild(taskLi);
    taskLi.appendChild(taskDiv);
    taskDiv.append(
        container1,
        container2
    );
}

function colorPriority(priority, div) {
    switch(priority.toLowerCase()) {
        case 'high':
            div.style.backgroundColor = '#AB1D3D';
            break;
        case 'medium':
            div.style.backgroundColor = '#FECD19';
            break;
        case 'low':
            div.style.backgroundColor = '#6FB202';
            break;
    }
}
