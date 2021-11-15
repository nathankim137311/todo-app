
  /////////////
 // Project //
/////////////

import Utility from "./utility";

export default class Project {
    static createProject(projectArr) {
        const projectList = document.getElementById('project-list');
        Utility.removeAllChildNodes(projectList);
        for(let i = 0; i < projectArr.length; i++) {
            const projectLi = document.createElement('li');
            const projectA = document.createElement('a');
            projectA.setAttribute('href', '#');
            projectA.textContent = `${projectArr[i]}`;
            projectList.appendChild(projectLi);
            projectLi.appendChild(projectA);
        }
        /*
        if(project !== null) {
            const projectList = document.getElementById('project-list');
            Utility.removeAllChildNodes(projectList);
            for(let i = 0; i < project.length; i++) {
                const projectLi = document.createElement('li');
                const projectA = document.createElement('a');
                projectA.setAttribute('href', '#');
                projectA.textContent = `${project[i]}`;
                projectList.appendChild(projectLi);
                projectLi.appendChild(projectA);
            }
        }
        */
    }
}