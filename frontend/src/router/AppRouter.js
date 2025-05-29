import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import * as Router from "./RouteNames";
import ProjectPage from "../pages/ProjectPage";
import BoardPage from "../pages/BoardPage";
import TaskPage from "../pages/TaskPage";
import Layout from "../pages/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route path={Router.HOME} element={<Navigate to={Router.ISSUES} />} />
      <Route path={Router.BOARDS} element={<Layout main={<ProjectPage />} />} />
      <Route
        path={Router.BOARD + Router.ID}
        element={<Layout main={<BoardPage />} />}
      />
      <Route path={Router.ISSUES} element={<Layout main={<TaskPage />} />} />
    </Routes>
  );
}

export default AppRouter;
