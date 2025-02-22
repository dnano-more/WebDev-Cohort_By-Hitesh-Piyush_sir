/*
Problem statement
You are building a banking system where multiple bank accounts can exist. Each account has an accountNumber, holderName, and balance. Implement the following methods:
deposit(amount): Adds money to the balance.
withdraw(amount): Deducts money but prevents overdraft.
transfer (amount, targetAccount): Transfers money from one account to another if the balance allows it.
Challenge
Implement BankAccount constructor with accountNumber, holderName, and balance.
• Attach deposit(amount), withdraw(amount), and transfer (amount, targetAccount) methods to the prototype.
*/

// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(accountNumber, holderName, balance) {
    // Initialize accountNumber, holderName, and balance properties
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
}

// Define deposit method on BankAccount's prototype
    BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    return this.balance;
}

// Define withdraw method on BankAccount's prototype
    BankAccount.prototype.withdraw = function (amount) {
    if (this.balance > amount) {
        this.balance -= amount;
        return this.balance;
    } else {
        return "Insufficient balance";
    }
}

// Define transfer method on BankAccount's prototype
    BankAccount.prototype.transfer = function (amount, targetAccount) {
    if (this.balance > amount) {
        this.balance -= amount;
        targetAccount.balance += amount;
        return this.balance;
    } else {
        return "Insufficient balance";
    }
}

// Taste cases
const account1 = new BankAccount(1, "John Doe", 1000);
const account2 = new BankAccount(2, "Jane Doe", 2000);
account1.transfer(500, account2);
console.log(account1.balance); // Output: 500
console.log(account2.balance); // Output: 2500

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const { accountNumber, holderName, balance, amount, targetAccount } = JSON.parse(input);
    const account1 = new BankAccount(accountNumber, holderName, balance);
    const account2 = new BankAccount(targetAccount.accountNumber, targetAccount.holderName, targetAccount.balance);
    account1.transfer(amount, account2);
    process.stdout.write(JSON.stringify([account1.balance, account2.balance]));
    rl.close();
});