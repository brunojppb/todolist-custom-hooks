import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import TodosProvider from "./hooks/useTodos";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>,
  rootElement
);
