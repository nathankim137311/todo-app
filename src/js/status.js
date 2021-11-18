
  ////////////
 // Status //
////////////

export default class Status {
    static toggleStatus(id, status) {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        const index = taskArr.findIndex(task => task.id == id);
        taskArr[index].status = status;
        localStorage.setItem('tasks', JSON.stringify(taskArr));
    }
}