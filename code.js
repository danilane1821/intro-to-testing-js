// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// console.log("Hello, World!");


// const helloWorld = function() {
//     return "Hello, World!";
// }

function sum (a, b) {
    if(b === "sheep"){
        return false
    }
    return a + b;
}

function sayHello(str) {
    // if(str === "Alex") {
    //     return "Hello, Alex!";
    // }else if (str === "Pat") {
    //     return "Hello, Pat!";
    // } else if(str === undefined) {
    //     return "Hello, World!";
    // }else if(str === "Jane"){
    //     return "Hello, Jane!";
    // }else if (str === undefined || str === true || str === false || str === null){
    //     return "Hello, World!";
    // }
    if (typeof str === "string"){
        return "Hello, " + str + "!";
    } else if (str === undefined || str === true || str === false || str === null){
        return "Hello, World!";
    }
}

console.log(sayHello());


function isFive(input) {
    if (input === 5) {
        return true;
    }else if (typeof input === 'string'){
         return false;
    }else {
        return 'boolean';
    }
}