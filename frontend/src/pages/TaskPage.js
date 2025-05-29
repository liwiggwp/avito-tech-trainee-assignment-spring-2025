import React from "react";
import ApiServices from "../services/ApiServices";
import ListTask from "../components/task/ListTask";
import { Box } from "@mui/material";

export default function TaskPage() {
  const { tasks } = ApiServices();

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box sx={{ flex: 3 }}>Название</Box>
        <Box sx={{ flex: 2 }}>Исполнитель </Box>
        <Box sx={{ flex: 1 }}>Приоритет</Box>
        <Box sx={{ flex: 1 }}>Статус</Box>
      </Box>
      <ListTask tasks={tasks} />
    </>
  );
}
