import React from "react";

import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "routes";
import GlobalStyle from "styles";

import "sanitize.css";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
