const fs = require('fs');
const path = require('path');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// fs.mkdir(path.join(__dirname, 'src'), (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Directory created successfully!');
// });
// function f1() {
//     console.log("f1");
// }
// function f2() {
//     console.log("f2");
// }
// let flag = 0;
// function f(f1, f2) {
//     if (flag) {
//         f1;
//     }
//     else {
//         f2;
//     }
// }
// f(f1, f2);

async function f() {
    return await  Promise.resolve('iam');
}

console.log(f());

function isinteger(n) {
    
    if (Number.isInteger(n)) {
        console.log("number is integer");
    }
    else {
        console.log('not a integer');
    }
}
isinteger(6);


function emptyArray(arr) {
    while (arr.length) {
        arr.pop();
    }
    return arr;
}

console.log(emptyArray([1, 2, 3, 4, 5]));
console.log(1%1)

const ans = [1, 2, 3, 4].concat([4, 4, 5, 6, 7]);
console.log(ans);

let date = new Date();
console.log(date.toString())
console.log(date);