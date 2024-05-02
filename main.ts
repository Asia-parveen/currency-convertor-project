#!/usr/bin/evn node

import inqurier from 'inquirer'

const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let usrAnswer = await inqurier.prompt([
    {
      name: "from", 
      message: "Enter from currency",
      type: "list",
      choices: ["USD","EUR","GBP","INR","PKR"]

    },
    {
      name: "to",
      message: "Enter your currency",
      type: "list",
      choices: ["USD","EUR","GBP","INR","PKR"]

    },
  
    {
      name: "amount",
      message: "Enter your amount",
      type: "number",
    }
])
 let fromAmount =currency [usrAnswer.from];
let toAmount = currency [usrAnswer.to];
let amount = usrAnswer.amount;
let baseamount = amount /  fromAmount; //usd base currency
let convertedAmount = baseamount *toAmount; 
console.log(convertedAmount);










