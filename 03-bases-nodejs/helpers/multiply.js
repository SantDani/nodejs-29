const fileSystem = require('fs') // or in new versions:  import { write, writeFile } from 'fs'


const createTableInFile = async (tableNumber = 1, limit) => {
    let output = "";
    console.clear();
    console.log("========================")
    console.log("Table ", tableNumber);
    console.log("========================")


    for (let i = 0; i < (limit+1); i++) {
        output += (`5 x ${i} = ${tableNumber * i} \n`);
    }

    console.log(output)
    const nameFile = `table${tableNumber}.txt`;


    try {
        fileSystem.writeFile(nameFile, output, (err) => {
            if (err) throw err;
        })
        return (`The file: ${nameFile} has been saved`);
    } catch (error) {
        return error;
    }
}

module.exports = {
    createTableInFile // or  createTableInFile: createTableInFile
}