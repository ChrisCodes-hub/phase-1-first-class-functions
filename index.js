// 1. A function that takes a callback and calls it
function receivesAFunction(cb) {
    cb(); 
}


receivesAFunction(function() {
    console.log("I am a callback function!");
});


function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction; 
}

const myNamedFunc = returnsANamedFunction();
myNamedFunc();

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!");
    };
}


const myAnonFunc = returnsAnAnonymousFunction();
myAnonFunc(); 