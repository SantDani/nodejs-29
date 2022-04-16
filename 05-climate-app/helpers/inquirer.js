require("colors");
const inquirer = require("inquirer");

const menuQuestions = [
  {
    type: "list",
    name: "option",
    message: "Chose a option",
    choices: [
      {
        value: 1,
        name: `${"1".green}. Search City`,
      }
      ,
      {
        value: 2,
        name: `${"2".green}. History`,
      },
      {
        value: 0,
        name: `${"3".green}. Exit`,
      }
    ],
  },
];

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

const listPlaces = async (places = []) => {

  let i = 0
  const choices = places.map((place) => {
    i++;
    return {
      value: place.id,
      name: `${i} ${place.name}`
    }
  })

  choices.unshift({ value: '0', name: '0.'.green + ' Cancel operation' })
  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Chose site',
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
  listPlaces,
  confirm,
  listCheck
};
