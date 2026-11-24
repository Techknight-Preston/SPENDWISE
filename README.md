
# SPENDWISE - Personal Budget Management Dashboard

## 1. Project Overview

SpendWise is a personal budget management dashboard designed to help users manage their monthly income, record expenses, monitor spending habits, and calculate their remaining balance.

The application provides a simple and interactive interface that allows users to organize expenses into different categories and monitor their financial position.

## 2. Technologies Used

- HTML5 - Provides the structure of the application.
- CSS3 - Handles styling, CSS Grid, Flexbox, responsiveness, and dark mode.
- JavaScript - Implements application logic and interactive functionality.
- DOM Manipulation - Dynamically updates dashboard information.
- Git and GitHub - Used for version control and project hosting.

## 3. Main Features

- Monthly income management.
- Expense recording and management.
- Six expense categories:
  - Food
  - Transport
  - Rent
  - Entertainment
  - Savings
  - Utilities
- Automatic calculation of total expenses.
- Automatic calculation of remaining balance.
- Dynamic category spending totals.
- Budget warnings when expenses exceed income.
- Ability to remove recorded expenses.
- Responsive dashboard layout.
- Dark theme support based on system preferences.

## 4. JavaScript Implementation

The JavaScript functionality connects user actions, application data, calculations, and the dashboard display.

### A. Variables and Data Types

Variables are used to store monthly income, expense records, category information, and expense identifiers.

The application uses:
- Strings for expense names and categories.
- Numbers for income and expense amounts.
- Arrays to store expense records.
- Objects to represent individual expenses.
- Booleans and conditions to evaluate budget situations.

### B. Arrays

An array named `categories` stores the six available expense categories.

Another array named `expenses` stores expense records entered by the user.

Each expense is represented by an object containing:
- Expense ID
- Expense name
- Expense category
- Expense amount

### C. Conditional Statements

Conditional statements evaluate different budgeting situations.

The application checks whether:
- Expenses exceed monthly income.
- The remaining balance is zero.
- The remaining balance is getting low.
- The user is still within the available budget.

The appropriate budget message is displayed depending on the result.

### D. Loops

JavaScript loops process expense records and calculate financial information.

Loops are used to:
- Calculate total expenses.
- Calculate spending per category.
- Update category totals.
- Display expense records.

### E. DOM Manipulation

DOM manipulation allows JavaScript to update the HTML page dynamically.

The application updates:
- Total monthly income.
- Total expenses.
- Remaining balance.
- Category spending totals.
- Category progress bars.
- Budget warning messages.
- The list of recorded expenses.

The dashboard updates without requiring the user to reload the page.

### F. Event Listeners

Event listeners respond to user interactions.

The application uses event listeners to:
- Update monthly income when the income form is submitted.
- Add expenses when the expense form is submitted.
- Remove expenses using the Remove button.
- Refresh the dashboard whenever financial information changes.

## 5. How to Use SpendWise

1. Open `index.html` in a web browser.
2. Enter your monthly income.
3. Submit the income form.
4. Enter an expense name.
5. Select an expense category.
6. Enter the expense amount.
7. Submit the expense form.
8. View the updated dashboard and remaining balance.
9. Use the Remove button to delete an expense.

## 6. Weekly Improvements

### Previous Development Stage

The dashboard was initially developed using HTML and CSS.

The first version included:
- Dashboard layout.
- Sidebar navigation.
- Summary cards.
- Six expense category cards.
- Responsive design using CSS Grid and Flexbox.
- Dark theme support.

### JavaScript Foundation

JavaScript was introduced to handle:
- Variables and data types.
- User input.
- Budget calculations.
- Functions.
- Loops.
- Console output.

### Interactive Application

The application was further improved by introducing:
- Conditional statements for budget evaluation.
- Arrays and objects for expense management.
- Dynamic DOM manipulation.
- Event listeners for user interactions.
- Automatic dashboard updates.
- Expense removal functionality.

## 7. Challenges and Solutions

| Challenge | Solution |
|---|---|
| Updating financial information dynamically | Used DOM manipulation to update dashboard elements. |
| Managing multiple expense records | Used arrays and objects to organize expense data. |
| Evaluating different budget situations | Implemented conditional statements. |
| Calculating total expenses | Used loops to process expense records. |
| Responding to user actions | Implemented event listeners for forms and buttons. |
| Maintaining a responsive interface | Used CSS Grid, Flexbox, and media queries. |

## 8. Testing

The application can be tested by:

- Entering different monthly income values.
- Adding expenses under different categories.
- Checking automatic expense calculations.
- Removing recorded expenses.
- Testing situations where expenses exceed income.
- Checking the dashboard on different screen sizes.

Example test:

Monthly Income: KSh 50,000

Expenses:
- Food: KSh 2,000
- Transport: KSh 1,000
- Rent: KSh 10,000
- Entertainment: KSh 1,000
- Savings: KSh 5,000
- Utilities: KSh 1,000

Expected Results:
- Total Expenses: KSh 20,000
- Remaining Balance: KSh 30,000

## 9. Project Structure

```text
SPENDWISE/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 10. Future Improvements

Future versions may introduce:
- Saving financial records using local storage.
- Monthly expense reports.
- Expense editing functionality.
- Charts and graphical spending analysis.
- User authentication and database integration.

## 11. GitHub Repository

Project Repository:
https://github.com/Techknight-Preston/SPENDWISE

---

Developed as part of a web development learning project.
