# [Todo App](https://nathankim137311.github.io/todo-list/)

## Description
An amped up Todo List dashboard (akin to the popular app Todoist). Users can perform basic CRUD operations, and organize their task items by project. 

## Demo

## Features
* Basic CRUD functionality
* Task states stored in localStorage
* Multiple pages
* Sort by priority
* Sort by date

## Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

## Questions
### What was your motivation?
I wanted to learn as much as possible with vanilla JavaScript before I moved onto React. Part of the assignment details from the Odin Project, was to build this app with pure JavaScript, DOM manipulation and classes. 

### Why did you build this project?
The project was assigned to me by the Odin Project JavaScript curriculum. 

### What did you learn?
* Learned about the principles of object-oriented programming
* Learned how to use a linter 
* Static functions
* Storing states in localStorage

## Challenges
* Classes (also [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this))
* DOM Manipulation
* Array of Objects

### Classes
Classes at first seemed pretty alien and hard to grasp, especially [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) keyword in JavaScript. As I was building this project I learned how to use classes as a way to contain data and procedures. 

#### Example 
```JavaScript
class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
}
```
#### My Project
```JavaScript
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
```
### DOM Manipulation
DOM manipulation was used extensively on my project, and I basically built everything with DOM manipulation with exception to navigation.

#### My Project
```JavaScript
const taskList = document.getElementById('task-list');
const taskLi = document.createElement('li');
taskLi.classList.add('todo-item-container');
const taskContainer = document.createElement('div');
const taskDiv = document.createElement('div');
taskDiv.classList.add('todo-item');
taskDiv.setAttribute('id', `${obj.id}`);
``` 

### Array of Objects
I had to learn how to filter/delete/find/traverse an array of objects. So for my project I wanted to delete and item from an array of objects and save that state in localStorage. 

#### My Project
```JavaScript
function deleteTodo(id) {
    const taskArr = JSON.parse(localStorage.getItem('tasks'));
    const index = taskArr.findIndex(task => task.id == id);
    taskArr.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(taskArr));
}
```

## Reflection
I would have researched more about object-oriented programming before diving deep into this project. I would want to organize my project a lot better using the MVC design pattern. The project as of now, is hard to read and hard to navigate.   
