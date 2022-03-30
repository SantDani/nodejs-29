const Task = require("./Task");

class Tasks {
    _list = {};

    get showTasks(){
        const list = []
        Object.keys(this._list).map( key =>{
            const task = this._list[key];
            list.push(task);
        })

        return list;
    }

    constructor(){
        this._list = {};
    }

    newTask(description = ''){
        const task = new Task(description);
        this._list[task.id] = task;
    }

    getTasks(){
        return this._list;
    }

    
}

module.exports = Tasks;