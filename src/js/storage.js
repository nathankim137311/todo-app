  
  /////////////
 // Storage //
/////////////

export const taskArr = [];
export const projectArr = [];

export default class Storage {
    static saveTask(task) {
        taskArr.push(task);
        localStorage.setItem('tasks', JSON.stringify(taskArr));
    }
    static saveProject(project) {
        projectArr.push(project);
        const uniqueProjects = [...new Set(projectArr)]; 
        localStorage.setItem('projects', JSON.stringify(uniqueProjects));
    }
}

