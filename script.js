
// SPENDWISE - JavaScript Budget Foundation

// 1. Store budgeting information using variables
const categories = ["Food", "Transport", "Rent", "Entertainment", "Savings", "Utilities"];

let monthlyIncome = 0;
let expenses = [];

// 2. Collect and validate user input
function collectBudgetData() {
    let incomeInput = prompt("Enter your monthly income in KSh:");

    monthlyIncome = Number(incomeInput);

    if (incomeInput === null || incomeInput.trim() === "" ||
        !Number.isFinite(monthlyIncome) || monthlyIncome < 0) {
        console.log("Invalid income entered. Please enter a valid number.");
        return false;
    }

    for (let category of categories) {
        let expenseInput = prompt("Enter your monthly amount for " + category + " in KSh:");

        if (expenseInput === null || expenseInput.trim() === "") {
            expenseInput = "0";
        }

        let amount = Number(expenseInput);

        if (!Number.isFinite(amount) || amount < 0) {
            console.log("Invalid amount for " + category + ". Using KSh 0.");
            amount = 0;
        }

        expenses.push({
            category: category,
            amount: amount
        });
    }

    return true;
}

// 3. Calculate total expenses using a reusable function
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let expense of expenseList) {
        total += expense.amount;
    }

    return total;
}

// 4. Calculate remaining balance using a reusable function
function calculateRemainingBalance(income, totalExpenses) {
    return income - totalExpenses;
}

// 5. Display budgeting results in the browser console
function displayBudgetResults() {
    let totalExpenses = calculateTotalExpenses(expenses);
    let remainingBalance = calculateRemainingBalance(monthlyIncome, totalExpenses);

    console.log("===== SPENDWISE BUDGET REPORT =====");
    console.log("Monthly Income: KSh " + monthlyIncome.toLocaleString());
    console.log("----------------------------------");

    for (let expense of expenses) {
        console.log(expense.category + ": KSh " + expense.amount.toLocaleString());
    }

    console.log("----------------------------------");
    console.log("Total Expenses: KSh " + totalExpenses.toLocaleString());
    console.log("Remaining Balance: KSh " + remainingBalance.toLocaleString());

    if (remainingBalance < 0) {
        console.log("Warning: You have exceeded your income.");
    } else {
        console.log("You are within your income.");
    }

    console.log("==================================");
}

// 6. Run the application
if (collectBudgetData()) {
    displayBudgetResults();
}