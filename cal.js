document.addEventListener("DOMContentLoaded", function() {
    const salaryInput = document.getElementById("salary");
    const addExpenseBtn = document.getElementById("add-expense");
    const calculateBtn = document.getElementById("calculate");
    const expenseList = document.getElementById("expense-list");
    const totalExpensesElem = document.getElementById("total-expenses");
    const remainingSalaryElem = document.getElementById("remaining-salary");

    let totalExpenses = 0;
    function updateBudget() {
        const salary = parseFloat(salaryInput.value) || 0;
        const remainingSalary = salary - totalExpenses;
        totalExpensesElem.textContent = totalExpenses.toFixed(2);
        remainingSalaryElem.textContent = remainingSalary.toFixed(2);
    }

    addExpenseBtn.addEventListener("click", function() {
        const expenseDiv = document.createElement("div");

        const expenseNameInput = document.createElement("input");
        expenseNameInput.classList.add("expense");
        expenseNameInput.setAttribute("placeholder", "Expense Name");

        const expenseAmountInput = document.createElement("input");
        expenseAmountInput.classList.add("amount");
        expenseAmountInput.setAttribute("type", "number");
        expenseAmountInput.setAttribute("placeholder", "Amount");

        expenseDiv.appendChild(expenseNameInput);
        expenseDiv.appendChild(expenseAmountInput);
        expenseList.appendChild(expenseDiv);
    });

 
    calculateBtn.addEventListener("click", function() {
        totalExpenses = 0;
        
    
        const expenseAmountInputs = document.querySelectorAll(".amount");
        expenseAmountInputs.forEach(function(input) {
            const amount = parseFloat(input.value) || 0;
            totalExpenses += amount;
        });


        updateBudget();
    });

    updateBudget();
});
