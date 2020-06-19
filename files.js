const fs = require('fs');

// reading files, asyncronous, takes in filepath and a function to run after it gets the file
// fs.readFile('./docs/blog1.txt', (error, data) => {
//     if ( error ) {
//         console.log(error);
//     }
//     console.log(data.toString());
// });
// console.log('last line?');

// writing files, if the document doesnt exist it will be created.
// fs.writeFile('./docs/blog1.txt', 'Meow', () => {
//     console.log('file was written');
// });

// directories, creating and removing them.
if ( !fs.existsSync('./assets')) {
    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('folder deleted');
    });
}

// deleting files