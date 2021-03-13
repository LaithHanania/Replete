import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserState } from "./contexts/User/UserState";

import axios from 'axios';
window.axios = axios;

ReactDOM.render(
  <UserState>
    <App />
  </UserState>,
  document.querySelector("#root")
);
