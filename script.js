
"use strict";

// ==========================================
// SPENDWISE - PERSONAL FINANCE DASHBOARD
// ==========================================

// Monthly income and expense records
let monthlyIncome = 85000;
let expenses = [];
let nextExpenseId = 1;

// Available expense categories and their budgets
const categories = [
    { name: "Food", budget: 12000, elementId: "food-total", progressClass: "food-progress" },
    { name: "Transport", budget: 8000, elementId: "transport-total", progressClass: "transport-progress" },
    { name: "Rent", budget: 15000, elementId: "rent-total", progressClass: "rent-progress" },
    { name: "Entertainment", budget: 6000, elementId: "entertainment-total", progressClass: "entertainment-progress" },
    { name: "Savings", budget: 15000, elementId: "savings-total", progressClass: "savings-progress" },
    { name: "Utilities", budget: 5000, elementId: "utilities-total", progressClass: "utilities-progress" }
];

// ==========================================
// DOM ELEMENTS
// ==========================================

const incomeForm = document.getElementById("income-form");
const incomeInput = document.getElementById("monthly-income");

const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseAmountInput = document.getElementById("expense-amount");

const totalIncomeElement = document.getElementById("total-income");
const totalExpensesElement = document.getElementById("total-expenses");
const remainingBalanceElement = document.getElementById("remaining-balance");

const expenseList = document.getElementById("expense-list");
const budgetMessage = document.getElementById("budget-message");

// ==========================================
// HELPER FUNCTIONS
// ==========================================

// Format numbers as Kenyan Shillings
function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (const expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// Calculate remaining balance
function calculateRemainingBalance() {
    return monthlyIncome - calculateTotalExpenses();
}

// Calculate expenses for a particular category
function calculateCategoryTotal(categoryName) {
    let total = 0;

    for (const expense of expenses) {
        if (expense.category === categoryName) {
            total += expense.amount;
        }
    }

    return total;
}

// ==========================================
// UPDATE DASHBOARD
// ==========================================

function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = calculateRemainingBalance();

    totalIncomeElement.textContent = formatCurrency(monthlyIncome);
    totalExpensesElement.textContent = formatCurrency(totalExpenses);
    remainingBalanceElement.textContent = formatCurrency(remainingBalance);

    updateCategoryCards();
    updateBudgetMessage();
    displayExpenses();
}

// ==========================================
// UPDATE CATEGORY CARDS
// ==========================================

function updateCategoryCards() {
    for (const category of categories) {
        const categoryTotal = calculateCategoryTotal(category.name);

        const totalElement = document.getElementById(category.elementId);
        const progressElement = document.querySelector("." + category.progressClass);

        if (totalElement) {
            totalElement.textContent = formatCurrency(categoryTotal);
        }

        if (progressElement) {
            const percentage = category.budget > 0
                ? (categoryTotal / category.budget) * 100
                : 0;

            // Limit the progress bar width to 100%
            progressElement.style.width = Math.min(percentage, 100) + "%";
        }
    }
}

// ==========================================
// BUDGET DECISION-MAKING
// ==========================================

function updateBudgetMessage() {
    const remainingBalance = calculateRemainingBalance();
    const totalExpenses = calculateTotalExpenses();

    if (remainingBalance < 0) {
        budgetMessage.textContent =
            "Warning! You have exceeded your monthly income by " +
            formatCurrency(Math.abs(remainingBalance)) + ".";

    } else if (remainingBalance === 0) {
        budgetMessage.textContent =
            "You have used your entire monthly income. No balance remains.";

    } else if (monthlyIncome > 0 &&
               remainingBalance <= monthlyIncome * 0.2) {
        budgetMessage.textContent =
            "Caution! You have used most of your income. Your remaining balance is " +
            formatCurrency(remainingBalance) + ".";

    } else if (totalExpenses === 0) {
        budgetMessage.textContent =
            "Your budget is ready. Start recording your expenses.";

    } else {
        budgetMessage.textContent =
            "Good job! You are managing your budget. Your remaining balance is " +
            formatCurrency(remainingBalance) + ".";
    }
}

// ==========================================
// DISPLAY EXPENSE RECORDS
// ==========================================

function displayExpenses() {
    expenseList.replaceChildren();

    if (expenses.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "No expenses recorded yet.";
        expenseList.appendChild(emptyMessage);
        return;
    }

    // Loop through the expense array
    for (const expense of expenses) {
        const expenseItem = document.createElement("div");
        expenseItem.className = "expense-item";

        const details = document.createElement("div");
        details.className = "expense-details";

        const name = document.createElement("h3");
        name.textContent = expense.name;

        const category = document.createElement("p");
        category.textContent = expense.category;

        const amount = document.createElement("strong");
        amount.textContent = formatCurrency(expense.amount);

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-expense";
        removeButton.textContent = "Remove";
        removeButton.dataset.expenseId = expense.id;
        removeButton.setAttribute("aria-label", "Remove " + expense.name);

        details.appendChild(name);
        details.appendChild(category);

        expenseItem.appendChild(details);
        expenseItem.appendChild(amount);
        expenseItem.appendChild(removeButton);

        expenseList.appendChild(expenseItem);
    }
}

// ==========================================
// INCOME FORM EVENT LISTENER
// ==========================================

incomeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newIncome = Number(incomeInput.value);

    if (!Number.isFinite(newIncome) || newIncome <= 0) {
        alert("Please enter a valid monthly income greater than zero.");
        return;
    }

    monthlyIncome = newIncome;

    updateDashboard();

    incomeForm.reset();

    alert("Your monthly income has been updated successfully!");
});

// ==========================================
// EXPENSE FORM EVENT LISTENER
// ==========================================

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const expenseName = expenseNameInput.value.trim();
    const expenseCategory = expenseCategoryInput.value;
    const expenseAmount = Number(expenseAmountInput.value);

    // Validate user input
    if (expenseName === "") {
        alert("Please enter an expense name.");
        return;
    }

    if (!categories.some(category =>
        category.name === expenseCategory
    )) {
        alert("Please select a valid expense category.");
        return;
    }

    if (!Number.isFinite(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter a valid expense amount greater than zero.");
        return;
    }

    // Store the new expense as an object in the array
    const newExpense = {
        id: nextExpenseId++,
        name: expenseName,
        category: expenseCategory,
        amount: expenseAmount
    };

    expenses.push(newExpense);

    // Refresh the dashboard
    updateDashboard();

    expenseForm.reset();

    alert("Expense added successfully!");
});

// ==========================================
// REMOVE EXPENSE EVENT LISTENER
// ==========================================

// Event delegation handles clicks on remove buttons
expenseList.addEventListener("click", function(event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains("remove-expense")) {
        const expenseId = Number(clickedElement.dataset.expenseId);

        // Remove the selected expense using filter()
        expenses = expenses.filter(function(expense) {
            return expense.id !== expenseId;
        });

        updateDashboard();
    }
});

// ==========================================
// INITIALIZE APPLICATION
// ==========================================

function initializeSpendWise() {
    updateDashboard();
}

// Run the application when the page loads
initializeSpendWise();
