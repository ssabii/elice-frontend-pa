import React from "react";

import { BrowserRouter } from "react-router-dom";
import Router from "routes";
import GlobalStyle from "styles";

import "sanitize.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
