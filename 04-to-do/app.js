require("colors");

const { saveDB, readDB } = require("./db/saveFile");
const { menuInquirer, pause, readInput, listDeleteTask, confirm, listCheck } = require("./helpers/inquirer");
const Tasks = require('./models/Tasks')

console.clear();
const main = async () => {
  let option = '';

  let tasks = new Tasks();

  const taskDB = readDB();

  if (taskDB) {
    tasks.loadTaskFromDB(taskDB)
  }

  do {
    option = await menuInquirer();
    switch (option) {
      case '1':
        const description = await readInput('Write a description for task: ');
        tasks.newTask(description);

        break;
      case '2':
        tasks.listTask();
        break;

      case '3':
        tasks.listCompletedTask(true);
        break;
      case '4':

        tasks.listCompletedTask(false);
        break;
      case '5':
        const ids = await listCheck(tasks.showTasks);
        console.log("🚀 ~ file: app.js ~ line 40 ~ main ~ ids", ids)
        tasks.completeTask(ids
          )
        
        break;
      case '6':// Delete

        const id = await listDeleteTask(tasks.showTasks);
        if (id !== '0') {
          const result = await confirm('Are you sure?');
          if (result) {
            tasks.removeTask(id);
            console.log("Task deleted successful".green)
          }
        }
        break;

      default:
        break;
    }

    saveDB(tasks.showTasks);

    try {
      await pause();
    } catch (error) {
      console.error("🚀 ~ file: app.js ~ line 40 ~ main ~ error", error)

    }
    console.log('FFF', option);
  } while (option !== '0');
};

main();
