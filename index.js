#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first number :", type: "number", name: "FirstNumber" },
    { message: "enyer your second number :", type: "number", name: "SecondNumber" },
    {
        message: "select operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Add", "Sub", "Multiplication", "Divid"],
    },
]);
if (answer.operator === "Add") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Sub") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Divid") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("please select valid operator");
}
