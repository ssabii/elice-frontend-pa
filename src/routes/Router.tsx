import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "layouts/Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Main</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
