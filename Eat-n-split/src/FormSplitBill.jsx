/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBil] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("");

  function getBillHandler(e) {
    setBil(Number(e.target.value));
  }
  function getUserExpenseValue(e) {
    setPaidByUser(
      Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
    );
  }
  function getWhoisPaying(e) {
    setWhoIsPaying(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>
      <label>Bill value</label>
      <input type="text" value={bill} onChange={getBillHandler} />
      <label>Your expense</label>
      <input type="text" value={paidByUser} onChange={getUserExpenseValue} />
      <label>{selectedFriend.name}&#39;s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>Who is paying the bill?</label>
      <select value={whoIsPaying} onChange={getWhoisPaying}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Add</Button>
    </form>
  );
}
