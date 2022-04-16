const { readInput } = require("../04-to-do/helpers/inquirer");
const { menuInquirer, pause } = require("./helpers/inquirer");

const main = async()=>{

    let option = 0;
    do {
         option = await menuInquirer();

        console.log(`selected option: ${option}`);

     
        if(option != 0) await pause();
      
    }while (option != 0);
}

main();