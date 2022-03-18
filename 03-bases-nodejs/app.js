
const { createTableInFile } = require('./helpers/multiply')



const [, , arg3] = process.argv;
const [, tableNumber = 1] = arg3.split('=');
console.log("🚀 ~ file: app.js ~ line 9 ~ arg3", tableNumber);

createTableInFile(tableNumber)
    .then(result => console.log(result))
