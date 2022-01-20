import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";
import Counters from "./components/counters";
import { Provider } from "react-redux";
import store from "./state/store";
import countersFun from "./components/Functional/CountersFunctional";
import CountersFun from "./components/Functional/CountersFunctional";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counters />
      <CountersFun></CountersFun>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();