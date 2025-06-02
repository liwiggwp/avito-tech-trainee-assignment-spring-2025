import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import FormTaskField from "./FormTaskField";
import { statuses, priorities } from "../../utils/Constants";
import { useSelector, useDispatch } from "react-redux";
import { closeForm } from "../../store/slices/formSlice";
import ApiServices from "../../services/ApiServices";
import { setTasks, updatedTask } from "../../store/slices/taskSlice";

export default function FormTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, mode, currentTask, boardId } = useSelector(
    (state) => state.form
  );
  const [boards, setBoards] = useState([]);
  const [users, setUsers] = useState([]);

  const { getUsers, getBoards, createTask, updateTask, getBoardsById } =
    ApiServices();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    project: "",
    priority: priorities.find((p) => p.name === "Medium")?.id,
    status: statuses.find((s) => s.name === "Backlog")?.id,
    responsible: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers());
    };

    const fetchBoards = async () => {
      setBoards(await getBoards());
    };

    fetchUsers();
    fetchBoards();
  }, []);

  useEffect(() => {
    if (mode === "edit" && currentTask) {
      setFormData({
        title: currentTask.title || "",
        description: currentTask.description || "",
        project: currentTask.boardId || "",
        priority:
          priorities.find((p) => p.name === currentTask.priority)?.id || "",
        status: statuses.find((s) => s.name === currentTask.status)?.id || "",
        responsible: currentTask.assignee?.id || "",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        project: boardId || "",
        priority: priorities.find((p) => p.name === "Medium")?.id || "",
        status: statuses.find((s) => s.name === "Backlog")?.id || "",
        responsible: "",
      });
    }
  }, [currentTask, mode, boardId]);

  const handleSubmit = async () => {
    const payload = {
      assigneeId: formData.responsible,
      description: formData.description,
      priority: priorities.find((p) => p.id == formData.priority)?.name,
      title: formData.title,
    };
    try {
      if (mode === "edit" && currentTask) {
        await updateTask(currentTask.id, {
          ...payload,
          status: statuses.find((s) => s.id === formData.status)?.name,
        });

        const newPayload = {
          ...currentTask,
          ...payload,
          status: statuses.find((s) => s.id === formData.status)?.name,
          assignee: users.find((u) => u.id === formData.responsible),
        };

        dispatch(updatedTask(newPayload));
      } else {
        await createTask({
          ...payload,
          boardId: Number(formData.project),
        });

        const updatedTasks = await getBoardsById(boardId);
        dispatch(setTasks(updatedTasks));
      }
      handleClose();
    } catch (e) {
      console.error(e.response?.data || e.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToBoard = () => {
    navigate(`/board/${currentTask.boardId}`, {
      state: { taskToEdit: currentTask },
    });
  };

  const handleClose = () => {
    dispatch(closeForm());
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {mode === "edit" ? "Редактировать задачу" : "Создать задачу"}
      </DialogTitle>
      <DialogContent>
        <FormTaskField
          formData={formData}
          handleChange={handleChange}
          statuses={statuses}
          priorities={priorities}
          projects={boards}
          responsible={users}
          disableStatus={mode === "create"}
        />
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent:
            mode === "edit" && currentTask?.boardId
              ? "space-between"
              : "flex-end",
        }}
      >
        {mode === "edit" && currentTask?.boardId && (
          <Button variant="outlined" onClick={handleToBoard}>
            Перейти на доску
          </Button>
        )}
        <Box>
          <Button variant="outlined" onClick={handleClose} sx={{ mr: 2 }}>
            Отмена
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!formData.title}
          >
            {mode === "edit" ? "Обновить" : "Создать"}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
