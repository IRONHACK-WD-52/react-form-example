import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LoginForm from "./LoginForm";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={LoginForm} />
    </BrowserRouter>
  );
}

export default App;
