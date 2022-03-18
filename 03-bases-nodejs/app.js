const { createTableInFile } = require('./helpers/multiply');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        demandOption: false
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) throw 'the base has to be a number';
        return true;
    })
    .argv;



// const [, , arg3] = process.argv;
// const [, tableNumber = 1] = arg3.split('=');

console.clear();
console.log(process.argv);
console.log(argv);


createTableInFile(argv.base, argv.limit)
    .then(result => console.log(result))
    .catch(error => console.error(error))
