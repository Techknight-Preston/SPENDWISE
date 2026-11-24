
# SpendWise – Personal Budget Tracker

## 1. Project Description

SpendWise is a personal budget tracking web application developed to help users manage their monthly income and expenses. The application allows users to record expenses, organize spending by categories, monitor their remaining balance, and understand their spending habits.

The main purpose of SpendWise is to make personal financial management easier through a simple, interactive, and user-friendly dashboard.

## 2. Project Objectives

- Allow users to enter and manage their monthly income.
- Enable users to record and remove expenses.
- Organize expenses into different spending categories.
- Calculate total expenses and remaining balance.
- Display spending information dynamically.
- Provide budget messages based on the user's financial situation.

## 3. Technologies Used

The project was developed using:

- **HTML5:** Used to structure the web application.
- **CSS3:** Used to style the dashboard and make it responsive.
- **JavaScript:** Used to implement the application's functionality and interactive features.
- **Git and GitHub:** Used for version control and source code management.
- **Netlify:** Used to deploy and host the live website.

## 4. Main Features

### Monthly Income Management
Users can enter their monthly income, which is used to calculate their available budget.

### Expense Management
Users can add expenses by providing an expense name, category, and amount. They can also remove recorded expenses.

### Expense Categories
Expenses are organized into categories such as:
- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

### Dashboard Summary
The dashboard dynamically displays:
- Total income
- Total expenses
- Remaining balance

### Budget Monitoring
The application uses conditional statements to display budget messages depending on the user's financial situation.

### Category Tracking
The application calculates spending in different categories and displays category totals and progress indicators.

## 5. JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

### Conditional Statements
If/else statements are used to evaluate budget situations and display appropriate budget messages.

### Arrays
Arrays are used to store multiple expense records.

### Loops
Loops process expense records, calculate totals, and organize expenses by category.

### DOM Manipulation
JavaScript updates HTML elements dynamically to display income, expenses, balances, category totals, and budget messages.

### Event Listeners
Event listeners handle user interactions, including submitting income forms, adding expenses, and removing expense records.

### Data Processing
User actions trigger JavaScript calculations, update the application data, and refresh the dashboard.

## 6. Project Structure

The project contains the following main files:

```text
SPENDWISE/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

**File descriptions:**

- `index.html` – Contains the structure and layout of the application.
- `style.css` – Contains the styling, dashboard layout, responsive design, and visual presentation.
- `script.js` – Contains the application logic, calculations, arrays, loops, conditional statements, and event listeners.
- `README.md` – Provides project documentation and deployment information.

## 7. Testing

The application was tested to check its functionality and deployment.

The following areas were considered during testing:

- Opening the application in a web browser.
- Checking that the dashboard and styling load correctly.
- Testing the income and expense input forms.
- Checking expense calculations and remaining balance.
- Testing expense removal.
- Checking category totals and budget messages.
- Verifying that the website is accessible through its public Netlify URL.
- Testing automatic deployment by pushing an update to GitHub and confirming that the change appeared on the live website.

**Data storage note:** Expense records are currently stored in JavaScript memory. They are reset when the browser page is refreshed.

## 8. Challenges Encountered During Development

Some of the challenges encountered during development included:

- Implementing JavaScript calculations for income and expenses.
- Connecting JavaScript functionality to HTML elements.
- Updating dashboard information dynamically.
- Organizing expense records into different categories.
- Making the dashboard responsive across different screen sizes.

These challenges were addressed through JavaScript functions, DOM manipulation, event listeners, and CSS styling.

## 9. GitHub Repository Information

The project source code is hosted on GitHub.

**Repository:**  
https://github.com/Techknight-Preston/SPENDWISE

The repository contains the project files and documentation.

## 10. Live Netlify Website

SpendWise is publicly hosted on Netlify.

**Live Website:**  
https://spendwise-budget-trackers.netlify.app/

The website can be accessed through the link above using a web browser.

## 11. Deployment Process Summary

The SpendWise application was deployed using Netlify.

The deployment process involved:

1. Preparing and organizing the project files.
2. Pushing the project files to a public GitHub repository.
3. Connecting the GitHub repository to Netlify.
4. Selecting the `main` branch as the production branch.
5. Configuring Netlify to publish the static website.
6. Making the website publicly accessible.
7. Testing the live website.
8. Updating the project and pushing the changes to GitHub.
9. Confirming that Netlify automatically deployed the changes.

Continuous deployment was successfully tested by adding a footer message to the application, committing the change, and pushing it to the GitHub `main` branch. The updated message subsequently appeared on the live Netlify website.

## 12. Challenges Encountered During Deployment

The following challenges were encountered during deployment:

- Navigating the Netlify dashboard and locating deployment settings.
- Configuring the GitHub repository connection.
- Understanding the production branch configuration.
- Identifying the correct public website URL.
- Learning how GitHub updates trigger automatic Netlify deployments.

These challenges were resolved by configuring the repository correctly and verifying the deployment through the Netlify dashboard.

## 13. Lessons Learned

Through this project, the following skills and concepts were gained:

- Developing interactive web applications using HTML, CSS, and JavaScript.
- Applying JavaScript conditional statements, arrays, loops, and event listeners.
- Manipulating the DOM to update web pages dynamically.
- Using Git and GitHub for version control.
- Deploying static websites using Netlify.
- Connecting GitHub repositories to Netlify.
- Understanding continuous integration and automatic deployment.
- Testing and verifying changes on a live website.

## 14. Future Improvements

Possible future improvements include:

- Adding database integration for permanent expense storage.
- Implementing user registration and authentication.
- Adding expense history and monthly reports.
- Introducing charts and graphical spending analysis.
- Supporting data export.
- Adding more advanced budgeting and savings features.

## 15. Conclusion

SpendWise demonstrates the development of an interactive personal budget tracking application using HTML, CSS, and JavaScript.

The project applies important programming concepts, including conditional statements, arrays, loops, DOM manipulation, and event listeners.

The application was successfully deployed using Netlify and connected to GitHub for automatic deployment. It provides a foundation for further development into a more comprehensive personal financial management system.
