import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";

import axios from "axios";
window.axios = axios;

ReactDOM.render(
  <RecoilRoot>
      <App />
  </RecoilRoot>,
  document.querySelector("#root")
);
