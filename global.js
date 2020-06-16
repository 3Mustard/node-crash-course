// Global object

// console.log(global);


global.setTimeout(() => {
    console.log('timeout!');
    clearInterval(int);
}, 3000);

setTimeout(() => {
    console.log('global is implied in this timeout!')
}, 3000);

const int = setInterval(() => {
    console.log('interval')
}, 1000);
