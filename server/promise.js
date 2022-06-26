/*
// callback
function addition(num1, num2, cb) {
    let result = 0
    setTimeout(() => {
        result = num1+num2;
        cb(result)
    }, 1000);
}

let num1 = 2;
let num2 = 3;
let resultFun = (res) => {
    console.log('result : ', res)
}

addition(num1, num2, resultFun);

console.log('Function ended!')
*/

function addition(num1, num2) {
    return new Promise((resolve, reject) => {
        let result = 0
        setTimeout(() => {
            result = num1+num2;
            resolve(result)
        }, 1000);
        // reject('result did not find')
    })
}

addition(2, 3).then(result => {
    console.log('result', result)
}).catch(err => console.log(err))


// callback
function addition(num1, num2, cb) {
    let result = 0
    let err = null;
    setTimeout(() => {
        result = num1+num2;
        cb(err, result)
    }, 1000);
}

let num1 = 2;
let num2 = 3;
let resultFun = (res) => {
    console.log('result : ', res)
}

addition(num1, num2, resultFun);

console.log('Function ended!')