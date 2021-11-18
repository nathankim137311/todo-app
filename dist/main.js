(()=>{"use strict";class t{static showForm(t){const e=t.target.textContent;"Add Task"===e?(t.target.style.backgroundColor="red",t.target.textContent="Close",document.getElementById("form-container").classList.add("active")):"Close"===e&&(t.target.style.backgroundColor="#5865F2",t.target.textContent="Add Task",document.getElementById("form-container").classList.remove("active"))}static removeAllChildNodes(t){for(;t.firstChild;)t.removeChild(t.firstChild)}static filter(t){return JSON.parse(localStorage.getItem("tasks")).filter((e=>e.project===t))}static defaultValue(t,e){for(let n,s=0;n=t.options[s];s++)if(n.value==e){t.selectedIndex=s;break}}static findSumOfArray(t){let e=0;for(let n in t)e+=t[n];return e}static getOccAndNames(t){const e=t.reduce(((t,e)=>t.set(e,(t.get(e)||0)+1)),new Map);return[[...e.values()],[...e.keys()]]}static sortByToday(t){const e=JSON.parse(localStorage.getItem("tasks")),n=[];for(let s=0;s<e.length;s++)e[s].date===t&&n.push(e[s]);return n}static getCurrentDate(){let t=new Date;const e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),s=t.getFullYear();return t=s+"-"+n+"-"+e,t}}class e{static toggleStatus(t,e){const n=JSON.parse(localStorage.getItem("tasks")),s=n.findIndex((e=>e.id==t));n[s].status=e,localStorage.setItem("tasks",JSON.stringify(n))}}class n{static createCounters(){const e=JSON.parse(localStorage.getItem("tasks")).map((t=>t.project)),n=t.getOccAndNames(e),s=n[0],a=n[1];this.addCountersToDom(a,s),this.addOccToInbox(s)}static addCountersToDom(t,e){for(let n=0;n<t.length;n++){const s=document.getElementById(`${t[n]}`),a=document.createElement("div");a.classList.add("project-counter");const o=document.createElement("p");o.classList.add("counter-integer"),a.appendChild(o),s.appendChild(a),o.textContent=`${e[n]}`}}static addOccToInbox(e){const n=t.findSumOfArray(e),s=document.getElementById("all-tasks-container"),a=document.createElement("div"),o=document.createElement("p");o.classList.add("counter-integer"),o.textContent=n,a.classList.add("project-counter"),a.appendChild(o),s.appendChild(a)}static updateCounters(){document.querySelectorAll(".project-counter").forEach((t=>t.remove())),this.createCounters()}}class s{constructor(t,e,n,a,o){this.id=JSON.parse(localStorage.getItem("id"))+1,this.title=t,this.description=e,this.project=n,this.priority=a,this.date=o,this.status="incomplete",s.saveId(this.id)}static saveId(t){const e=t;localStorage.setItem("id",JSON.stringify(e))}static clearTaskList(){document.getElementById("task-list").innerHTML=""}static createNewTaskList(t){for(let e=0;e<t.length;e++)a(t[e])}}function a(s){const a=document.getElementById("task-list"),o=document.createElement("li");o.classList.add("todo-item-container");const c=document.createElement("div"),i=document.createElement("div");i.classList.add("todo-item"),i.setAttribute("id",`${s.id}`);const d=document.createElement("div");d.classList.add("task-info-div"),i.addEventListener("click",(()=>{d.classList.toggle("show")}));const r=document.createElement("div");r.classList.add("info-container-1");const l=document.createElement("span");l.textContent=`Project: ${s.project}`;const u=document.createElement("label");u.htmlFor="title-"+s.id,u.textContent="Title:";const m=document.createElement("input");m.setAttribute("id","title-"+s.id),m.setAttribute("type","text"),m.setAttribute("readonly","readonly"),m.textContent=`${s.title}`,m.setAttribute("value",`${s.title}`),m.classList.add("detail-inputs-"+s.id);const p=document.createElement("label");p.htmlFor="date-"+s.id,p.textContent="Due date:";const g=document.createElement("input");g.setAttribute("id","date-"+s.id),g.classList.add("detail-inputs-"+s.id),g.setAttribute("type","date"),g.setAttribute("value",`${s.date}`),g.setAttribute("readonly","readonly");const E=document.createElement("label");E.htmlFor="priority-"+s.id,E.textContent="Priority level:";const y=document.createElement("select");y.setAttribute("id","priority-"+s.id),y.classList.add("detail-inputs-"+s.id),y.setAttribute("value",s.priority),y.setAttribute("disabled","disabled");const h=document.createElement("option");h.setAttribute("value","low"),h.textContent="Low";const v=document.createElement("option");v.setAttribute("value","medium"),v.textContent="Medium";const k=document.createElement("option");k.setAttribute("value","high"),k.textContent="High",y.append(h,v,k),t.defaultValue(y,s.priority);const C=document.createElement("button");C.setAttribute("id","edit-btn"),C.innerHTML='<span class="material-icons-outlined">edit</span>',C.addEventListener("click",(()=>{(class{static toggleEdit(t,e){const n=[...document.querySelectorAll(".detail-inputs-"+e)];"Save"!==t.innerHTML?(t.innerHTML="Save",n.forEach((t=>{t.readOnly=!1,t.style.border="1px #5865F2 solid",t.removeAttribute("disabled")}))):(t.innerHTML='<span class="material-icons-outlined">edit</span>',n.forEach((t=>{t.readOnly=!0,t.style.border="1px transparent solid"})),this.saveEdit(e))}static saveEdit(t){const e=document.getElementById("title-"+t),n=document.getElementById("description-"+t),s=document.getElementById("date-"+t),a=document.getElementById("priority-"+t),o=JSON.parse(localStorage.getItem("tasks")),c=o.map((t=>t.id)).indexOf(t);o[c].title=e.value,o[c].description=n.value,o[c].date=s.value,o[c].priority=a.value,localStorage.setItem("tasks",JSON.stringify(o)),location.reload()}}).toggleEdit(C,s.id)})),r.append(l,u,m,p,g,E,y);const S=document.createElement("label");S.htmlFor="description-"+s.id,S.textContent="Description:";const I=document.createElement("textarea");I.setAttribute("id","description-"+s.id),I.classList.add("detail-inputs-"+s.id),I.setAttribute("type","text"),I.setAttribute("readonly","readonly"),I.textContent=`${s.description}`,I.setAttribute("value",`${s.description}`),d.append(r,S,I,C);const b=document.createElement("div");b.classList.add("container-1");const f=document.createElement("input");f.classList.add("checkbox"),f.setAttribute("type","checkbox");const L=document.createElement("span");L.textContent=`${s.title}`,"complete"===s.status&&(f.checked=!0,o.classList.add("active")),f.addEventListener("change",(()=>{o.classList.toggle("active"),d.classList.remove("show"),f.checked?e.toggleStatus(s.id,"complete"):e.toggleStatus(s.id,"incomplete")})),b.append(L,f);const x=document.createElement("div");x.classList.add("container-2");const A=document.createElement("div"),N=document.createElement("span");N.innerHTML='<span class="material-icons-outlined"><a id="delete-icon" title="delete task" href="#">delete</a></span>',N.addEventListener("click",(t=>{t.stopPropagation();const e=t.target.parentNode.parentNode.parentNode.parentNode.id;t.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove(),function(t){const e=JSON.parse(localStorage.getItem("tasks")),n=e.findIndex((e=>e.id==t));e.splice(n,1),localStorage.setItem("tasks",JSON.stringify(e))}(e),n.updateCounters()})),x.append(A,N),function(t,e){switch(t.toLowerCase()){case"high":e.style.backgroundColor="#FF0000";break;case"medium":e.style.backgroundColor="#FECD19";break;case"low":e.style.backgroundColor="#6FB202"}}(s.priority,A),a.appendChild(o),o.appendChild(c),c.append(i,d),i.append(b,x)}class o{static createProject(e){const n=document.getElementById("project-list"),o=document.getElementById("project-heading");t.removeAllChildNodes(n);for(let a=0;a<e.length;a++){const c=document.createElement("li"),i=document.createElement("div");i.setAttribute("id",`${e[a]}`);const d=document.createElement("a");d.setAttribute("href","#"),d.textContent=`${e[a]}`,i.appendChild(d),d.addEventListener("click",(()=>{const e=d.textContent;o.textContent=e,s.clearTaskList();const n=t.filter(e);s.createNewTaskList(n)})),n.appendChild(c),c.appendChild(i)}const c=document.getElementById("all-tasks");c.addEventListener("click",(()=>{o.textContent=c.textContent,s.clearTaskList();const t=JSON.parse(localStorage.getItem("tasks"));for(let e=0;e<t.length;e++)a(t[e])}));const i=document.getElementById("today");i.addEventListener("click",(()=>{o.textContent=i.textContent;const e=t.getCurrentDate(),n=t.sortByToday(e);s.clearTaskList();for(let t=0;t<n.length;t++)a(n[t])}))}}let c=[],i=[];class d{static saveTask(t){c.push(t),localStorage.setItem("tasks",JSON.stringify(c))}static saveProject(t){i.push(t);const e=[...new Set(i)];return localStorage.setItem("projects",JSON.stringify(e)),e}}class r extends d{static itemsFromStorage(){this.tasks(),this.projects(),this.counters()}static tasks(){null===localStorage.getItem("tasks")?c=[]:(c=JSON.parse(localStorage.getItem("tasks")),this.loadTasks(c))}static projects(){null===localStorage.getItem("projects")?i=[]:(i=JSON.parse(localStorage.getItem("projects")),this.loadProjects(i))}static counters(){null===localStorage.getItem("tasks")?c=[]:n.createCounters()}static loadTasks(t){for(let e=0;e<t.length;e++)a(t[e])}static loadProjects(t){o.createProject(t)}}const l=document.getElementById("form"),u=document.getElementById("add-task-link"),m=document.getElementById("add-task-btn"),p=document.getElementById("project-link");window.onload=function(){r.itemsFromStorage()},l.addEventListener("click",(t=>{t.preventDefault()})),u.addEventListener("click",(e=>{t.showForm(e)})),m.addEventListener("click",(()=>{const t=function(){const t=document.getElementById("title-input").value,e=document.getElementById("description-input").value,n=document.getElementById("project-input").value,o=document.getElementById("priority-input").value,c=document.getElementById("date-input").value,i=new s(t,e,n,o,c);return a(i),i}();d.saveTask(t);const e=d.saveProject(t.project);o.createProject(e),n.updateCounters()})),p.addEventListener("click",(()=>{document.getElementById("project-list").classList.toggle("active")}))})();