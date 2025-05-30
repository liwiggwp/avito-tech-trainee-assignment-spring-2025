import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Menu,
  MenuItem,
  Divider,
  Typography,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ApiServices from "../services/ApiServices";
import ListTask from "../components/task/ListTask";
import Search from "../components/search/Search";

const statuses = [
  { id: 1, name: "Backlog" },
  { id: 2, name: "ToDo" },
  { id: 3, name: "InProgress" },
  { id: 4, name: "Done" },
];

export default function TaskPage() {
  const { tasks, boards } = ApiServices();
  const [filteredTask, setFilteredTask] = useState(tasks);
  const [anchorEl, setAnchorEl] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);
  const [boardFilter, setBoardFilter] = useState(null);

  const handleSearchChange = (searchTerm) => {
    filterTasks(searchTerm, statusFilter, boardFilter);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status === statusFilter ? null : status);
    filterTasks(null, status === statusFilter ? null : status, boardFilter);
    handleFilterClose();
  };

  const handleBoardFilter = (board) => {
    setBoardFilter(board === boardFilter ? null : board);
    filterTasks(null, statusFilter, board === boardFilter ? null : board);
    handleFilterClose();
  };

  const filterTasks = (searchTerm, status, board) => {
    let filtered = [...tasks];

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(lowerSearch) ||
          task.assignee?.fullName?.toLowerCase().includes(lowerSearch) ||
          task.responsible?.toLowerCase().includes(lowerSearch)
      );
    }

    if (status) {
      filtered = filtered.filter((task) => task.status === status);
    }

    if (board) {
      filtered = filtered.filter((task) => task.boardName === board);
    }

    setFilteredTask(filtered);
  };

  const clearFilters = () => {
    setStatusFilter(null);
    setBoardFilter(null);
    setFilteredTask(tasks);
    handleFilterClose();
  };

  useEffect(() => {
    setFilteredTask(tasks);
  }, [tasks]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <Search onSearchChange={handleSearchChange} />
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Button
            startIcon={<FilterAltIcon />}
            variant="outlined"
            onClick={handleFilterClick}
            sx={{
              textTransform: "none",
              color: "#161616",
              borderColor: "#161616",
              "&:hover": {
                borderColor: "#161616",
                backgroundColor: "#161616",
                color: "white",
              },
            }}
          >
            Фильтры
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleFilterClose}
          >
            <MenuItem disabled>
              <Typography variant="subtitle2">
                Фильтр по статусу задачи
              </Typography>
            </MenuItem>
            {statuses.map((status) => (
              <MenuItem
                key={status.id}
                selected={status.name === statusFilter}
                onClick={() => handleStatusFilter(status.name)}
              >
                {status.name}
              </MenuItem>
            ))}
            <Divider />
            <MenuItem disabled>
              <Typography variant="subtitle2">Фильтр по доске</Typography>
            </MenuItem>
            {boards.map((board) => (
              <MenuItem
                key={board.id}
                selected={board.name === boardFilter}
                onClick={() => handleBoardFilter(board.name)}
              >
                {board.name}
              </MenuItem>
            ))}

            <Divider />

            <MenuItem
              onClick={clearFilters}
              disabled={!statusFilter && !boardFilter}
            >
              Сбросить фильтры
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Card variant="outlined" sx={{ mt: 2, mb: 2 }}>
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Box sx={{ flex: 3 }}>Название</Box>
            <Box sx={{ flex: 2 }}>Исполнитель</Box>
            <Box sx={{ flex: 1 }}>Приоритет</Box>
            <Box sx={{ flex: 1 }}>Статус</Box>
          </Box>
          <ListTask tasks={filteredTask} />
        </CardContent>
      </Card>
    </>
  );
}
