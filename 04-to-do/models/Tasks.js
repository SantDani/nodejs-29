const Task = require("./Task");

class Tasks {
    _list = {};

    get showTasks() {
        const list = []
        Object.keys(this._list).map(key => {
            const task = this._list[key];
            list.push(task);
        })

        return list;
    }

    get arrayTasks(){
        const list = []
        Object.keys(this._list).map(key => {
            const task = this._list[key];
            list.push(task);
        })

        return list;
    }

    constructor() {
        this._list = {};
    }

    newTask(description = '') {
        const task = new Task(description);
        this._list[task.id] = task;
    }

    loadTaskFromDB(tasks = []) {
        tasks.map((task) => {
            this._list[task.id] = task;
        })
    }

    getTasks() {
        return this._list;
    }


    listTask() {
        let num = 1;
        Object.keys(this._list).map(key => {

            const status = this._list[key].finishedAt ? 'Done'.green : 'Pending'.red;
            console.log(`${num}. ${(this._list[key].description)} - ${status}`);
            num++;
        })
    }

    listCompletedTask(done = true) {
        let num = 1;
        Object.keys(this._list).map(key => {
            const status = this._list[key].finishedAt ? 'Done'.green : 'Pending'.red;
            const finishedAt = this._list[key].finishedAt
            
            if (done) {

                if (this._list[key].finishedAt) {
                    console.log(`${num}. ${(this._list[key].description)} - ${status} at ${finishedAt.green}`);
                    num++;
                }
            } else {
                if (!this._list[key].finishedAt) {
                    console.log(`${num}. ${(this._list[key].description)} - ${status}`);
                    num++
                }
            }
        })
        console.log('\n\n');
    }

    completeTask(completeTasks = []) {

        completeTasks.map((id) => {
            if (!this._list[id].finishedAt) {
                this._list[id].finishedAt = new Date().toISOString();
            }
        })

        this.arrayTasks.forEach((task)=>{
            if(!completeTasks.includes(task.id)){
                this._list[task.id].finishedAt = null; 
            }
        })        

    }
    removeTask(id = '') {

        if (this._list[id]) {
            delete this._list[id];
        }

    }

}

module.exports = Tasks;