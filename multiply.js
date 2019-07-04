const fs = require('fs');
const colors = require('colors');

let showTable = (base, limit) => {
    for (let i = 1; i <= limit; i++) {
        console.log(`${ base } x ${ i } = ${ base * i }`);
    }
}

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limit)) {
            reject(`Some value typed is not a number`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${ base } x ${ i } = ${ base * i }\n`;
        };

        fs.writeFile(`tables/table-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`table-${ base }`.green);
        });
    });
}

module.exports = {
    createFile,
    showTable
}