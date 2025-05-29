import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Router from "./RouteNames";
import Home from "../pages/Home";
import BoardPage from "../pages/BoardPage";
import TaskPage from "../pages/TaskPage";

function AppRouter() {
  return (
    <Routes>
      <Route path={Router.HOME} element={<Home />} />
      <Route path={Router.BOARDS} element={<BoardPage />} />
      <Route path={Router.ISSUES} element={<TaskPage />} />
    </Routes>
  );
}

export default AppRouter;
