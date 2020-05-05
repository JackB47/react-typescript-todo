import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} step={3} />
      <TodoList />
    </div>
  );
}

export default App;
