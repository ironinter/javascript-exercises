// const removeFromArray = function(arr, item) {
//     for (let i = 1; i < arguments.length; i++) {

//         arr.forEach((element, index) => {
//             if (element === arguments[i]) arr.splice(index, 1);
//         });
//     }
//     return arr;  
// };

const removeFromArray = function(arr, ...toRemoves) {
    let arr2 = [];
    for (element of arr) {
        if (!toRemoves.includes(element)) arr2.push(element); 
    }
    return arr2;
}

// Do not edit below this line
module.exports = removeFromArray;
