import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "styles";
import Router from "routes";

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
