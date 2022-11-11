import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "layouts/Layout";
import CoursePage from "pages/course/CoursePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CoursePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
