
const fileSystem = require('fs') // or in new versions:  import { write, writeFile } from 'fs'

const tableNumber = 9;
let output = "";
console.clear();
console.log("========================")
console.log("Table ", tableNumber);
console.log("========================")


for (let i = 0; i < 11; i++) {
    output += (`5 x ${i} = ${tableNumber * i} \n`);
}

console.log(output)
const nameFile = `table${tableNumber}.txt`;
fileSystem.writeFile(nameFile, output, (err) => {
    if (err) throw err;
    console.log(`The file: ${nameFile} has been saved`);
})


