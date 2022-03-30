
const {v4: uudiv4 } = require('uuid')

class Task {
    id = '';
    description = '';
    finishedAt = null;

    constructor(description) {
        this.id = uudiv4();
        this.description = description;
        this.finishedAt = null;
    }
}

module.exports = Task;