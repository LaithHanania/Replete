import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserState } from "./contexts/User/UserState";

ReactDOM.render(
  <UserState>
    <App />
  </UserState>,
  document.querySelector("#root")
);
