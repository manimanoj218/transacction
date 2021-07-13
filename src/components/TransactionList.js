import React from "react";
import "../App.css";

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3 className="text_Align">Transactions</h3>
      <ul>
        {transactions.map((item, index) => (
          <li key={index}>
            {item.date} - {item.value} - {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TransactionList;
