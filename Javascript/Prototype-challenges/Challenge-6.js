/*
Problem statement
Create a BankAccount constructor that initializes:
A balance property representing the account balance.
A transactions array to log all deposit and withdrawal activities.

Implement the following methods on the prototype:
1. deposit(amount):
• Increases the balance by the given amount.
• Adds a transaction log in the format: "Deposited x" (where X is the amount).
2. withdraw(amount):
• Decreases the balance by the given amount.
• Prevents overdraft (cannot withdraw if balance is insufficient).
• If withdrawal is successful, log: "Withdrew X".
• If balance is insufficient, log: "Insufficient balance".
3. getTransactionHistory():
• Returns the list of all transactions as an array of strings in the order they occurred.

Challenge
Implement BankAccount constructor with balance and transactions.
Attach deposit (amount), withdraw(amount), and getTransactionHistory() methods to the prototype.

Hint 1
Use this.transactions.push("Deposited " + amount); in deposit() and similar for withdrawals.

*/

// Solution

// Implement the BankAccount constructor function and its prototype methods

function BankAccount(balance) {
    // Initialize balance and transactions properties
    this.accountBalance = balance;
    this.transactions = [];
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount) {
    this.accountBalance += amount;
    this.transactions.push("Deposited " + amount);
}

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount) {
    if (this.accountBalance >= amount) {
        this.accountBalance -= amount;
        this.transactions.push("Withdrew " + amount);
    } else {
        this.transactions.push("Insufficient balance");
    }
}

// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function() {
    return this.transactions;
}

// Test code
const account = new BankAccount(200);
account.deposit(100);
account.withdraw(50);
account.withdraw(300);

console.log(account.getTransactionHistory()); // Expected output: ["Deposited 100", "Withdrew 50", "Insufficient balance"]