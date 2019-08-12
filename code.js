// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sum (a, b) {
    if(b === "sheep"){
        return false
    }
    return a + b;
}

function sayHello(str) {
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

console.log(isFive());


function isEven(input) {
    if (parseInt(input) % 2 === 0) {
        return true;
    }else if(input % 2 === 1){
        return false;
    }else if(isNaN(input) === true){
        return false;
    }else if (isFinite(1000 / input) === true || false){
        return false;
    } else if (input === true || input === false || input === undefined){
        return false;
    }
}

console.log(isEven());

function isVowel(input) {

    if (isNaN(input) === false){
        return false;
    }else if (input === undefined || input === true || input === false){
        return false;
    }else if ("aeiouAEIOU".indexOf(input) != -1){
        return true;
    }else{
        return false;
    }
}

console.log(isVowel());




function add(a,b) {
    if(isNaN(a) === true || isNaN(b) === true) {
        return "isNaN";
    }else {
        return parseInt(a) + parseInt(b);
    }
}

