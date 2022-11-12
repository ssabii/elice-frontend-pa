import React from "react";

import Layout from "layouts";
import CoursePage from "pages/course";
import { Route, Routes } from "react-router-dom";

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
