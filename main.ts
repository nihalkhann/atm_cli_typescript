#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


let myBalance = 100000;
console.log(chalk.blueBright("NIHAL KHAN GHOURI"));

console.log("pin is 1234");
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            type: "number",
            message: chalk("Please Enter your pin code: ")
            
        }
        
    ]
);
    if(pinAnswer.pin === myPin){
          console.log("Successfully login");
    
    
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                type: "list",
                message: "What do you want to do?",
                choices: ["Deposit", "Withdraw","Fast Cash" ,"Check Balance", "Exit"]
            }
        ]
    );
    if(operationAns.operation === "Withdraw"){
        let withdrawAmount = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "How much do you want to withdraw?"
                }
            ]
        );
        if(withdrawAmount.amount <= myBalance){
            myBalance = myBalance - withdrawAmount.amount;
            console.log("Your new balance is " + myBalance);
        }
        else{
            console.log("Insufficient balance");
        }
    }
    else if(operationAns.operation === "Fast Cash"){
        let fastCashAmount = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "list",
                    choices: ['1000','2000','5000','10000']
                }
            ]
        );
        if(fastCashAmount.amount <= myBalance){
            myBalance = myBalance - fastCashAmount.amount;
            console.log("Your new balance is " + myBalance);
        }
            
        else{
            console.log("Insufficient balance");
        }
    }
    else if(operationAns.operation === "Deposit"){
        let depositAmount = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "How much do you want to deposit?"
                }
            ]
        );
        myBalance = myBalance + depositAmount.amount;
        console.log("Your new balance is " + myBalance);
    }
    else if(operationAns.operation === "Check Balance"){
        console.log("Your current balance is " + myBalance);
    }
        
    else if(operationAns.operation === "Exit"){
        console.log(chalk.blueBright("Thank you for banking with us"));
    }
} else {
    console.log(chalk.red("Wrong pin code"));

}   