import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Router from "./RouteNames";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <Routes>
      <Route path={Router.HOME} element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
