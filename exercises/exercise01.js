"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "TJ",
    bankAccount: bankAccount,
    hobbies: ["Programming", "Logic Puzzles"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
