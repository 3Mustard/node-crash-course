// Global object

// console.log(global);


global.setTimeout(() => {
    console.log('timeout!');
}, 3000);

setTimeout(() => {
    console.log('global is implied in this timeout!')
}, 3000);