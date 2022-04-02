require("colors");

const { saveDB, readDB } = require("./db/saveFile");
const { menuInquirer, pause, readInput } = require("./helpers/inquirer");
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
        console.log(tasks.showTasks);
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
