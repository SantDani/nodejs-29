const { readInput } = require("../04-to-do/helpers/inquirer")

const main = async()=>{

    const text = await readInput('Write something');
    console.log(text);
}

main();