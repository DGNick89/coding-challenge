# Coding Challenge

This project is a React-based financial dashboard that pulls data from a local JSON file and displays financial information, including revenue, expenses, gross profit margin, net profit margin, and working capital ratio. The dashboard is designed to showcase key financial metrics in a user-friendly format.

## Features
* Revenue: Displays the total revenue generated from sales.
* Expenses: Displays a breakdown of various expenses, such as advertising, bank fees, and wages.
* Gross Profit Margin: Calculates the gross profit margin based on the provided data.
* Net Profit Margin: Calculates the net profit margin based on the financial data.
* Working Capital Ratio: Displays the working capital ratio based on current assets and liabilities.
## Tech Stack 
* React: For building the user interface.
* CSS: For styling the components.
* JavaScript: For logic and data manipulation.
* JSON: For storing and retrieving financial data.

## Installation 
1. Clone the repository:
```bash 
 git clone https://github.com/yourusername/financial-dashboard.git
```
2. Navigate into the project directory:
```bash
cd coding-challenge
```
3. Install dependencies
```bash
npm install
```
4. Start the development server:
```bash
npm start
```
5. Open the app in your browser at http://localhost:5173

## File Structure
```bash
financial-dashboard/
├── public/
│   ├── index.html
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── Revenue.js
│   │   ├── Expenses.js
│   │   ├── GrossProfitMargin.js
│   │   ├── NetProfitMargin.js
│   │   └── WorkingCapitalRatio.js
│   ├── App.js
│   ├── App.css
│   └── data/
│       └── data.json
├── package.json
└── README.md
```
* `App.js`: The main React component that renders the financial dashboard.
* `App.css`: The CSS file for styling the application.
* `components/`: Folder containing React components for rendering different financial metrics (Revenue, Expenses, etc.).
* `data/data.json`: A JSON file containing financial data used to populate the dashboard.

## Data Format

The data is structured in a JSON format that contains various financial accounts, categorized into revenue, expense, assets, liabilities, etc. Each account contains the following key attributes:

* `account_category`: Category of the account (e.g., revenue, expense).
* `account_name`: The name of the account (e.g., Sales, Advertising).
* `total_value`: The monetary value associated with the account.
* `account_currency`: The currency of the account (e.g., AUD).
* `value_type`: Specifies whether the value is a credit or debit.
* `account_code`: The unique code for the account.

`Example`:

```bash
{
  "account_category": "revenue",
  "account_code": "200",
  "account_name": "Sales",
  "total_value": 32431.0,
  "account_currency": "AUD",
  "value_type": "credit"
}
```