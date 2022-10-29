import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    expenseDate: new Date(2022, 10, 23),
    expenseTitle: "car insurance",
    expenseAmount: 294.67,
  },
  {
    id: "e2",
    expenseDate: new Date(2022, 12, 15),
    expenseTitle: "Electricity",
    expenseAmount: 100.15,
  },
  {
    id: "e3",
    expenseDate: new Date(2022, 3, 17),
    expenseTitle: "credit card",
    expenseAmount: 500.56,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
