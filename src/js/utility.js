  
  /////////////
 // Utility //
/////////////

export default class Utility {
    static showForm(e) {
        const string = e.target.textContent;
        if(string === 'Add Task') {
            e.target.style.backgroundColor = 'red';
            e.target.textContent = 'Close';
            document.getElementById('form-container').classList.add('active');
        } else if(string === 'Close') {
            e.target.style.backgroundColor = '#5865F2'; // blurple
            e.target.textContent = 'Add Task'
            document.getElementById('form-container').classList.remove('active');
        }
    }
    static removeAllChildNodes(parent) {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    static filter(name) {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        const newArr = taskArr.filter(task => task.project === name);
        return newArr;
    }
    static defaultValue(select, objValue) {
        for(let i, j = 0; i = select.options[j]; j++) {
            if(i.value == objValue) {
                select.selectedIndex = j; 
                break;
            }
        }
    }
    static findSumOfArray(arr) {
        let total = 0;
        for (let i in arr) {
            total += arr[i];
        }
        return total;
    }
    static getOccAndNames(arr) {
        const occurrencesArr = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        const occurrences = [...occurrencesArr.values()];
        const projectNames = [...occurrencesArr.keys()];
        return [occurrences, projectNames];
    }
}
    
