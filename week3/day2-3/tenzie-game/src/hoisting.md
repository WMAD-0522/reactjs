Hoisting is a term used in JavaScript to describe how the language handles variable and function declarations in a file. When a file is parsed by JavaScript, the interpreter first looks for all of the variables and functions declared in that file, and moves them to the top of the file before running the code. This is called hoisting.

For example, let's say we have the following code:

```javascript
console.log(x);
var x = 5;
```

Even though we haven't yet defined x, this code will not throw an error when it runs. That's because, behind the scenes, the interpreter will hoist the variable declaration to the top of the file, like this:


```javascript
var x;
console.log(x);
x = 5;
```
This means that, when the console.log() statement runs, x will have a value of undefined.

Function declarations are also hoisted in the same way. For example:

```javascript
hello();

function hello() {
  console.log("Hello!");
}
```

This code will run without error because the `hello()` `function declaration` is `hoisted` to the top of the file before the code is executed.

It's important to note that hoisting only applies to declarations, not initializations. That means that if you declare a variable without initializing it, it will still be hoisted to the top of the file, but it will have a value of undefined. If you try to access that variable before it is initialized, you will get an error.