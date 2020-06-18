const fs = require('fs');

// reading files, asyncronous, takes in filepath and a function to run after it gets the file
fs.readFile('./docs/blog1.txt', (error, data) => {
    if ( error ) {
        console.log(error);
    }
    console.log(data.toString());
});

// writing files


// directories


// deleting files