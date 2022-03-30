require("colors");

const { menuInquirer, pause } = require("./helpers/inquirer");

console.clear();
const main = async () => {
  let option = "";
  do {
    option = await menuInquirer();
    console.log("🚀 ~ file: app.js ~ line 9 ~ main ~ option", { option });

    console.log(new Task());
    await pause();
  } while (option !== 0);
};

main();
