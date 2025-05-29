import React, { useEffect, useState } from "react";
import { Box, Card, CardContent } from "@mui/material";
import ApiServices from "../services/ApiServices";
import ListTask from "../components/task/ListTask";
import Search from "../components/search/Search";

export default function TaskPage() {
  const { tasks } = ApiServices();
  const [filteredTask, setFilteredTask] = useState(tasks);

  const handleSearchChange = (searchTerm) => {
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(lowerSearch) ||
        task.assignee?.fullName?.toLowerCase().includes(lowerSearch) ||
        task.responsible?.toLowerCase().includes(lowerSearch)
    );
    setFilteredTask(filtered);
  };
  useEffect(() => {
    setFilteredTask(tasks);
  }, [tasks]);
  return (
    <>
      <Search onSearchChange={handleSearchChange} />
      <Card variant="outlined" sx={{ mt: 2, mb: 2 }}>
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Box sx={{ flex: 3 }}>Название</Box>
            <Box sx={{ flex: 2 }}>Исполнитель </Box>
            <Box sx={{ flex: 1 }}>Приоритет</Box>
            <Box sx={{ flex: 1 }}>Статус</Box>
          </Box>
          <ListTask tasks={filteredTask} />
        </CardContent>
      </Card>
    </>
  );
}
