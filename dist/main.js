(()=>{"use strict";class t{constructor(e,n,c,o,s){this.id=JSON.parse(localStorage.getItem("id"))+1,this.title=e,this.description=n,this.project=c,this.priority=o,this.date=s,this.status="incomplete",t.saveId(this.id)}static saveId(t){const e=t;localStorage.setItem("id",JSON.stringify(e))}}const e=[],n=[];class c{static saveTask(t){e.push(t),localStorage.setItem("tasks",JSON.stringify(e))}static saveProject(t){n.push(t);const e=[...new Set(n)];localStorage.setItem("projects",JSON.stringify(e))}}const o=document.getElementById("add-task-link"),s=document.getElementById("add-task-btn"),a=document.getElementById("project-link");o.addEventListener("click",(t=>{(class{static showForm(t){const e=t.target.textContent;"Add Task"===e?(t.target.style.backgroundColor="red",t.target.textContent="Close",document.getElementById("form-container").classList.add("active")):"Close"===e&&(t.target.style.backgroundColor="#5865F2",t.target.textContent="Add Task",document.getElementById("form-container").classList.remove("active"))}}).showForm(t)})),s.addEventListener("click",(()=>{const e=function(){document.getElementById("title-input").value,document.getElementById("description-input").value,document.getElementById("project-input").value,document.getElementById("priority-input").value,document.getElementById("date-input").value;const e=new t("Homework","complete homework before 9pm","School","high","11/13/21");return function(t){const e=document.getElementById("task-list"),n=document.createElement("li"),c=document.createElement("div");c.classList.add("todo-item");const o=document.createElement("div");o.classList.add("container-1");const s=document.createElement("input");s.classList.add("checkbox"),s.setAttribute("type","checkbox");const a=document.createElement("span");a.textContent=t.title,o.append(s,a);const d=document.createElement("div");d.classList.add("container-2");const i=document.createElement("div"),l=document.createElement("span");l.innerHTML='<span class="material-icons-outlined"><a title="delete task" href="#">delete</a></span>',d.append(i,l),function(t,e){switch(t.toLowerCase()){case"high":e.style.backgroundColor="#AB1D3D";break;case"medium":e.style.backgroundColor="#FECD19";break;case"low":e.style.backgroundColor="#6FB202"}}(t.priority,i),e.appendChild(n),n.appendChild(c),c.append(o,d)}(e),e}();(class{static createProject(t){const e=document.getElementById("project-list"),n=document.createElement("li"),c=document.createElement("a");c.setAttribute("href","#"),c.textContent=t,e.appendChild(n),n.appendChild(c)}}).createProject(e.project),c.saveTask(e),c.saveProject(e.project)})),a.addEventListener("click",(()=>{document.getElementById("project-list").classList.toggle("active")}))})();