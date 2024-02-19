import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Lägg till transaktion</h3>
      <div className="form-control">
        <label htmlFor="text">Post</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Transaktion..."
        />
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="amount">
            Summa: <br /> (Lägg till ett minustecken ( - ) för utgift)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ange Summa"
          />
        </div>
        <button className="btn">Lägg Till</button>
      </form>
    </>
  );
};

export default AddTransaction;
