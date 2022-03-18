// const [, , arg3] = process.argv;
// const [, tableNumber = 1] = arg3.split('=');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'is the base of the multiplication table'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        demandOption: false,
        describe: 'limit of the multiplication table. Default is 10'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) throw 'the base has to be a number';
        return true;
    })
    .argv;

module.exports = argv;
