import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ApiServices from "../services/ApiServices";
import ColumnBoard from "../components/board/ColumnBoard";
import { getColumnNameById, statuses } from "../utils/Constants";
import { useSelector, useDispatch } from "react-redux";
import { openEditForm } from "../store/slices/formSlice";
import { setTasks } from "../store/slices/taskSlice";

export default function BoardPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectTitle = location.state?.projectTitle;

  const tasks = useSelector((state) => state.task.tasks);

  const { getBoardsById, updateStatusTask } = ApiServices(id);

  useEffect(() => {
    if (id) {
      getBoardsById(id).then((data) => {
        dispatch(setTasks(data));
      });
    }
    const taskToEdit = location.state?.taskToEdit;
    if (taskToEdit) {
      dispatch(openEditForm(taskToEdit));
      navigate(location.pathname, { replace: true });
    }
  }, [id, location.state, dispatch, navigate, location.pathname]);

  const handleDropTask = async (taskId, newStatus) => {
    try {
      await updateStatusTask(taskId, { status: newStatus });
      const updatedData = await getBoardsById(id);
      dispatch(setTasks(updatedData));
    } catch (error) {
      console.error(error);
    }
  };
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
            taskBoard={tasks.filter((task) => task.status === status.name)}
            status={status.name}
            onDropTask={handleDropTask}
          />
        ))}
      </Box>
    </>
  );
}
