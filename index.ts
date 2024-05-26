#!/usr/bin/env node

import inquirer from "inquirer";
let exchangerate:any={
    "Dollar":1,
    "Euro":2,
    "Riyal":0.5,
    "Yan":1.5,

}
let useranswer= await inquirer.prompt([
    {
        name:"fromcurrency",
        type:"list",
        message:"select currency",
        choices:["Dollar","Euro","Riyal","Yan"]

},
{

        name:"tocurrency",
        type:"list",
        message:"select currency to convert into",
        choices:["Dollar","Euro","Riyal","Yan"]
},
{
    name:"amount",
    type:"number",
    message:"Enter Amount to convert",
}
]);
let fromamount=exchangerate[useranswer.fromcurrency];
let toamount=exchangerate[useranswer.tocurrency];
let amount= useranswer.amount
let baseamoount= amount/ fromamount
let convertedamount = baseamoount*toamount
console.log(convertedamount);