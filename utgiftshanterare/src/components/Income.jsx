import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const incomes = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-container">
      <div>
        <h4>Inkomst</h4>
        <p className="money plus">{incomes}</p>
      </div>
      <div>
        <h4>Utgift</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default Income;
