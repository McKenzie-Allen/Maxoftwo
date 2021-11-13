const { Console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



reader.question("What would you like to calculate?", function(input) {
    tokens = input.split(' ');

    mathSymbol = tokens[0];
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2]);
    if (mathSymbol === "+") {
        console.log("Addidtion")
        console.log(num1 + num2);
    }
    if (mathSymbol === "-") {
        Console.lot("Subtraction")
        console.log(num1 - num2);
    }
    if (mathSymbol === "/") {
        console.log("division")
        console.log(num1 / num2);
    }
    if (mathSymbol === "*") {
        console.log("Mutiplication")
        console.log(num1 * num2);
    }
    if (mathSymbol === "sqrt") {
        console.log("Square Root")
        console.log(Math.sqrt(num1))
    }


    // This line closes the connection to the command line interface.
    reader.close()

});