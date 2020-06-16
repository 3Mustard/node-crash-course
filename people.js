const cats = ['Akira', 'Lenny', 'Princess'];
const itzy = ['lia', 'yeji', 'yuna', 'chaeryeong', 'ryujin'];

console.log(cats);

//Manually export anything that needs to be used in another file
module.exports = {
    cats: cats,
    itzy: itzy
};

//This works like the code above, if the key/value is the same name. 
// module.exports = {
//     cats, itzy
// };
