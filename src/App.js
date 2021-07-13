import "./App.css";
import TransactionList from "./components/TransactionList";
import { useState, useEffect } from "react";
import moment from "moment";

function App() {
  const [trsnValue, setvalue] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleChange = (eve) => {
    setvalue(eve.target.value);
  };

  const addOrRemoveTransaction = (type) => {
    if (trsnValue !== "" && trsnValue !== undefined) {
      let obj = {
        date: moment().format(),
        value: trsnValue,
        type: type,
      };
      setTransactions((transactions) => [...transactions, { ...obj }]);
      setvalue(0);
    }
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("transactions"));
    if (data) {
      setTransactions(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="App border-style">
      <h1>Expense Tracker - Basic</h1>
      <div className="input_css border-style">
        <input type="number" value={trsnValue} onChange={handleChange} />
        <div>
          <button
            type="button"
            disabled={trsnValue <= 0}
            onClick={() => addOrRemoveTransaction("Add")}
          >
            Add
          </button>
          <button
            type="button"
            disabled={trsnValue <= 0}
            onClick={() => addOrRemoveTransaction("Remove")}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="list-style border-style">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
