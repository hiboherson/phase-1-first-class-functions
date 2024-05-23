function receivesAFunction(callback) {
    callback();
}

function myCallbackFunction() {
    console.log("This is my callback function!");
}

receivesAFunction(myCallbackFunction);



function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function.");
    };
}

const myFunction = returnsANamedFunction();
myFunction(); 

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}

const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction();
