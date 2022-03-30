const { v4: uuidv4 } = require("uuid");

export class Task {
  id = "";
  description = "";
  completed = false;

  constructor(description) {
    this.id = uuidv4();
    this.description = description;
  }
}
