document.getElementById("add-task").addEventListener("click",(t=>{!function(t){const e=t.target.textContent;"Add Task"===e?(t.target.style.backgroundColor="red",t.target.textContent="Close",document.getElementById("form-container").classList.add("active")):"Close"===e&&(t.target.style.backgroundColor="#5865F2",t.target.textContent="Add Task",document.getElementById("form-container").classList.remove("active"))}(t)})),console.log("working");