require("colors");
const inquirer = require("inquirer");

const menuQuestions = [
  {
    type: "list",
    name: "option",
    message: "Chose a option",
    choices: [
      {
        value: '1',
        name: "1. New task",
      },
      {
        value: '2',
        name: "2. List completed task",
      },
      {
        value: '3',
        name: "3. List pending task",
      },
      {
        value: '4',
        name: "4. Complete task(s)",
      },
      {
        value: '5',
        name: "5. Delete task",
      },
      {
        value: '0',
        name: "0. Exit",
      },
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



module.exports = {
  menuInquirer,
  pause,
  readInput
};
