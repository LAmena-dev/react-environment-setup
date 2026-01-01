import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Bio, { Greeting, FaveFood, HTMLConv } from "./Greeting.jsx";
import TodoList from "./jsxCurlys.jsx";
import DrinkList from "./condPrac.jsx";
import List from "./renderList/renderList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <List />
    <DrinkList />
    <App />
    <Greeting />
    <FaveFood />
    <HTMLConv />
    <Bio />
    <TodoList />
  </StrictMode>
);
