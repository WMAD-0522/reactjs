// hoisting

// var a; //declaration

// console.log(a); // call a variable

// a = 5; // assinging


console.log(sayHello());

function sayHello() { // function declaration
    // hoisted
    console.log("Hello Hiroki");
}

// console.log(a());

const a = function () { // function expression // anon function
    console.log("Hello again");
}

console.log(b());

const b = () => { // arrow function // function expression
    console.log("b");
}