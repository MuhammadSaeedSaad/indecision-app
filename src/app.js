import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
// to reset the css for all browsers to start from the same point (vid 8.4)
import "normalize.css/normalize.css";
import "./styles/style.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));



