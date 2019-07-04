const argv = require('./yargs').argv;
const mul = require('./multiply');

let command = argv._[0];

switch (command) {
    case 'list':
        mul.showTable(argv.base, argv.limit);
        break;
    case 'create':
        mul.createFile(argv.base, argv.limit)
            .then(file => console.log(`File saved: ${ file }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Command not found');
        break;
}