console.log('hello world');

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
reader.question("How are you doing today?", function(answer) {
    console.log("thats" + answer);
});