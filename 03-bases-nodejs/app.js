
const { createTableInFile } = require('./helpers/multiply')

const tableNumber = 7;

createTableInFile(tableNumber).
    then(result => console.log(result))
