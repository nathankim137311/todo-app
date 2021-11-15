  
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
}
    
