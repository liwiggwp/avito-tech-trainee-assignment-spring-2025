import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ApiServices from "../services/ApiServices";
import ColumnBoard from "../components/board/ColumnBoard";
import { getColumnNameById, statuses } from "../utils/Constants";

export default function BoardPage() {
  const { id } = useParams();
  const location = useLocation();
  const projectTitle = location.state?.projectTitle;

  const { getBoardsById } = ApiServices(id);
  const [taskBoard, setTaskBoard] = useState([]);

  useEffect(() => {
    if (id) {
      getBoardsById(id).then((data) => {
        setTaskBoard(data);
      });
    }
  }, [id]);

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {projectTitle}
      </Typography>
      <Box sx={{ display: "flex" }}>
        {statuses.map((status) => (
          <ColumnBoard
            key={status.id}
            nameColumn={getColumnNameById(status.id)}
            taskBoard={taskBoard.filter((task) => task.status === status.name)}
          />
        ))}
      </Box>
    </>
  );
}
