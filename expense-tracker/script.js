const addExpenseButton = document.querySelector('.add-expense-btn');
const expenseList = document.querySelector('.expense-list');
var totalExpense = document.getElementById('total-expense');

let expenses = [];
let total = 0;

function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('li');
        expenseItem.textContent = `${expense.description}: $${expense.amount.toFixed(2)}`;
        const deleteButton = document.createElement('button');
        // Add a class for styling
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteExpense(index);
        });
        expenseItem.appendChild(deleteButton);
        expenseList.appendChild(expenseItem);
    });

    // Update total variable and display it
    total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    // Update the total expense display
    totalExpense.textContent = `Total Expense: $${total.toFixed(2)}`;
}

function addExpense() {
    const description = prompt('Enter expense description:');
    const amount = parseFloat(prompt('Enter expense amount:'));
    if (description && !isNaN(amount)) {
        expenses.push({ description, amount });
        total += amount;
        renderExpenses();
    }
}

function deleteExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);
    renderExpenses();
}

addExpenseButton.addEventListener('click', addExpense);