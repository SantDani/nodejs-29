const Task = require("./Task");

class Tasks {
    _list = {};

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