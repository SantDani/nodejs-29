require("colors");

const { showMenu, pause } = require("./helpers/message");
console.clear();
const main = async () => {
  let option = "";
  do {
    option = await showMenu();
    console.log("🚀 ~ file: app.js ~ line 9 ~ main ~ option", option);
    if (option !== "0") await pause();
  } while (option !== "0");
};

main();
