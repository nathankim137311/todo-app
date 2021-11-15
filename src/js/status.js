export default class Status {
    static toggleStatus(id, status) {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        const statusArr = JSON.parse(localStorage.getItem('statuses'));
        const index = taskArr.findIndex(task => task.id == id);
        switch(status) {
            case 'complete':
                taskArr[index].status = status;
                statusArr[index] = status;
                localStorage.setItem('tasks', JSON.stringify(taskArr));
                localStorage.setItem('statuses', JSON.stringify(statusArr));
                break;
            case 'incomplete':
                taskArr[index].status = status;
                statusArr[index] = status;
                localStorage.setItem('tasks', JSON.stringify(taskArr));
                localStorage.setItem('statuses', JSON.stringify(statusArr));
                break;
        }
    }
}