// import { useState } from "react";
import "./style.css";
import FriendLists from "./FriendLists";

function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendLists />
        </div>
      </div>
    </>
  );
}

export default App;
