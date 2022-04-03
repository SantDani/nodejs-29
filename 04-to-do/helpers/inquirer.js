require("colors");
const inquirer = require("inquirer");

const menuQuestions = [
  {
    type: "list",
    name: "option",
    message: "Chose a option",
    choices: [
      {
        value: "1",
        name: `${"1".green}. New task`,
      }
      ,
      {
        value: '2',
        name: `${"2".green}. List tasks`,
      },
      {
        value: '3',
        name: `${"3".green}. List completed task`,
      },
      {
        value: '4',
        name: `${"4".green}. List pending task`,
      },
      {
        value: '5',
        name: `${"5".green}. Complete task(s)`,
      },
      {
        value: '6',
        name: `${"6".green}. Delete task`,
      },
      {
        value: '0',
        name: `${"0".green}. Exit`,
      },
    ],
  },
];

/**
 * 
 * 
 *  1. New tas
 *  2. List task
    3. List completed task
    4. List pending task
    5. Complete task(s)
    6. Delete task
    0. Exit
 * @returns 
 */
const menuInquirer = async () => {
  console.clear();
  console.log("=================================".green);
  console.log("Chose a option");
  console.log("=================================\n".green);

  const { option } = await inquirer.prompt(menuQuestions);

  return option;
};

const pause = async () => {

  const question = [
    {
      type: "input",
      name: "someKey",
      message: `Write ${"some key".green} to continue\n`,
    }
  ];

  await inquirer.prompt(question);
};

const readInput = async (message) => {

  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please, write a description'
        }
        return true;
      }
    }
  ]

  const { description } = await inquirer.prompt(question);

  return description;
}

const listDeleteTask = async (task = []) => {

  let i = 0
  const choices = task.map((task) => {
    i++;
    return {
      value: task.id,
      name: `${i} ${task.description}`
    }
  })

  choices.unshift({ value: '0', name: '0.'.green + ' Cancel operation' })
  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete',
      choices: choices
    }
  ]
  const { id } = await inquirer.prompt(questions);

  return id;
}


const listCheck = async (task = []) => {

  let i = 0
  const choices = task.map((task) => {
    i++;
    return {
      value: task.id,
      name: `${i} ${task.description}`,
      checked: task.finishedAt ? true : false
    }
  })

  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Chose What do you want delete',
      choices: choices
    }
  ]
  const { ids } = await inquirer.prompt(question);

  return ids;
}

const confirm = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'result',
      message: message
    }
  ]

  const { result } = await inquirer.prompt(question);

  return result;
}

module.exports = {
  menuInquirer,
  pause,
  readInput,
  listDeleteTask,
  confirm,
  listCheck
};
