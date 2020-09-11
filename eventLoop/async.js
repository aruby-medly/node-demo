const fs = require('fs');

console.log('Task 1');
console.log('Task 2');
fs.readFile(`${__dirname}/ridiculously_large_file.txt`, (err, data) => {
    if (err) throw err;
    console.log('done reading file');
    process.exit();
});
console.log('Task 3');