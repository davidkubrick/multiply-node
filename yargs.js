let options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Prints on console the multiply table', options)
    .command('create', 'Create and save the multiply table for a specific number', options)
    .help()
    .argv;

module.exports = {
    argv
}