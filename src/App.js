import React from "react";
import "./styles.css";
import Todolist from "./components/Todolist";

export default function App() {
  return (
    <div className="App">
      <h1>Todolist Gitpod</h1>
      <h3>Manage your tasks here</h3>
      <Todolist />
    </div>
  );
}
