const { createTableInFile } = require('./helpers/multiply');
const argv = require('./config/yargs')





console.clear();
console.log(process.argv);
console.log(argv);


createTableInFile(argv.base, argv.limit)
    .then(result => console.log(result))
    .catch(error => console.error(error))
