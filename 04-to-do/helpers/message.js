const { read } = require("fs");

const showMenu = () => {
  return new Promise((reject) => {
    console.clear();
    console.log("=================================".green);
    console.log("Chose a option");
    console.log("=================================\n".green);

    console.log(`${"1".green}. New task`);
    console.log(`${"2".green}. List task`);
    console.log(`${"3".green}. List completed task`);
    console.log(`${"4".green}. List pending task`);
    console.log(`${"5".green}. Complete task(s)`);
    console.log(`${"6".green}. Delete task`);
    console.log(`${"0".green}. Exit \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Chose a option: ", (optionChose) => {
      console.log(`Option selected `, { optionChose });
      readline.close();

      reject(optionChose);
    });
  });
};

const pause = () => {
  return new Promise((reject) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      `Write ${"some key".green} to continue`,
      (optionChose) => {
        readline.close();
        reject();
      }
    );
  });
};

module.exports = { showMenu, pause };
