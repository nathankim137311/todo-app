
  /////////////
 // Project //
/////////////

export default class Project {
    static createProject(project) {
        const projectList = document.getElementById('project-list');
        const projectLi = document.createElement('li');
        const projectA = document.createElement('a');
        projectA.setAttribute('href', '#');
        projectA.textContent = project;
        projectList.appendChild(projectLi);
        projectLi.appendChild(projectA);
    }
}