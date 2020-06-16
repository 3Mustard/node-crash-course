// require will run the file and assign any exports in it to xyz
const { cats, itzy } = require('./people');

console.log(cats);
console.log(itzy);

// Works the same as above 
// const xyz = require('./people');

// console.log(xyz.cats);
// console.log(xyz.itzy);

// core module
// returns an object with information about operatin system
const os = require('os');

console.log(os.platform(), os.homedir());