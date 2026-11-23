
# SPENDWISE - Financial Dashboard

## Project Description

SPENDWISE is a personal finance dashboard designed to help users
organize and monitor their monthly finances.

This project builds on the previous Budget Tracker assignment
and introduces a modern dashboard layout using CSS Grid and
Flexbox.

The dashboard displays financial information through static
category cards, providing a clean and organized overview of
personal spending.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- Flexbox
- Google Fonts (Poppins and Inter)
- CSS Custom Properties
- Responsive Web Design

## Project Structure

### 1. index.html

This file contains the structure of the dashboard.

It includes:

- Sidebar navigation menu.
- Dashboard header.
- User profile section.
- Monthly financial summary.
- Six financial category cards:
  - Food
  - Transport
  - Rent
  - Entertainment
  - Savings
  - Utilities
- Dashboard footer.

### 2. style.css

This file controls the visual appearance and layout.

It includes:

- CSS custom properties for the colour theme.
- Typography and Google Fonts.
- CSS Grid for the main dashboard layout.
- Flexbox for navigation, header and card content.
- Card spacing, borders and shadows.
- Hover and keyboard focus animations.
- Responsive layout for screens below 768px.
- Dark theme using system colour preferences.

### 3. script.js

The existing JavaScript file from the previous
Budget Tracker project is retained in the repository.
The current dashboard shell uses static content and
does not require JavaScript functionality.

## Design Features

- Professional navy and emerald green colour palette.
- Clean and modern dashboard interface.
- Six financial category cards.
- Responsive single-column mobile layout.
- Interactive visual hover and focus effects.
- Automatic light and dark theme support.

## How to Run the Project

1. Clone or download the SPENDWISE repository.
2. Open the project folder.
3. Open index.html in a web browser.
4. View the financial dashboard.

## Project Purpose

The purpose of this project is to demonstrate the
use of modern CSS layout techniques, responsive
design, custom properties and visual styling in
developing a financial dashboard interface.

---


## JavaScript Foundation

SPENDWISE has been extended with JavaScript to process budgeting information, collect user input, perform calculations and display financial results in the browser console.

### JavaScript Concepts Implemented

#### 1. Variables and Data Types
- `const` is used to store the expense categories that remain fixed.
- `let` is used for values that change during execution, including monthly income and expenses.
- Numbers are used for financial calculations.
- Strings are used to collect and display user information.
- Arrays are used to store expense records.
- Objects are used to represent individual expenses using their category and amount.

#### 2. User Input
The application uses the JavaScript `prompt()` function to collect the user's monthly income and expenses for Food, Transport, Rent, Entertainment, Savings and Utilities.

The collected values are converted into numbers using `Number()` and validated before being processed.

#### 3. Budget Calculations
The application calculates the total expenses by adding the amounts entered for all expense categories.

It then calculates the remaining balance by subtracting total expenses from monthly income.

**Formula:**

Remaining Balance = Monthly Income - Total Expenses

#### 4. Functions
The application uses reusable functions to organize its logic:

- `collectBudgetData()` collects and validates user input.
- `calculateTotalExpenses()` calculates the total expenses.
- `calculateRemainingBalance()` calculates the remaining balance.
- `displayBudgetResults()` displays the financial report in the browser console.

#### 5. Loops
The `for...of` loop is used to iterate through the expense categories and expense records, reducing repetitive code.

#### 6. Output
The application displays a labelled financial report in the browser console using `console.log()`. The report includes monthly income, individual category expenses, total expenses and remaining balance.

It also displays a warning if total expenses exceed monthly income.

#### 7. How to Test the JavaScript
1. Open `index.html` in a web browser.
2. Open the browser Developer Tools using `F12`.
3. Select the Console tab.
4. Refresh the page.
5. Enter the requested income and expenses in the pop-up prompts.
6. View the generated SPENDWISE budget report in the console.

**Project Name:** SPENDWISE  
**Project Type:** Personal Finance Dashboard  
**Developer:** Preston Mark Ngui

