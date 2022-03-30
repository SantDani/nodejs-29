require("colors");

const { menuInquirer, pause, readInput } = require("./helpers/inquirer");
const Tasks = require('./models/Tasks')

console.clear();
const main = async () => {
  let option = '';

  let tasks = new Tasks();
  /**
     * 1. New task
     2. List completed task`
     3. List pending task
     4. Complete task(s)
     5. Delete task
     0. Exit
     
     */
  do {
    option = await menuInquirer();
    switch (option) {
      case '1':
        const description = await readInput('Write a description for task: ');
        tasks.newTask(description);

        break;
      case '2':
        console.log(tasks.getTasks());
        break;

      default:
        break;
    }

    console.log("🚀 ~ file: app.js ~ line 9 ~ main ~ option", { option }, (option !== 0));

    try {
      await pause();
    } catch (error) {
      console.log("🚀 ~ file: app.js ~ line 40 ~ main ~ error", error)

    }
    console.log('FFF', option);
  } while (option !== '0');
  // } while (true);
};

main();
