import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import FormTaskField from "./FormTaskField";
import { statuses, priorities } from "../../utils/Constants";
import { useSelector, useDispatch } from "react-redux";
import { closeForm } from "../../store/slices/formSlice";
import ApiServices from "../../services/ApiServices";

export default function FormTask() {
  const dispatch = useDispatch();
  const { isOpen, mode, currentTask } = useSelector((state) => state.form);
  
  const { users } = ApiServices();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    project: "",
    priority: priorities.find((p) => p.name === "Medium")?.id,
    status: statuses.find((s) => s.name === "ToDo")?.id,
    responsible: "",
  });

  useEffect(() => {
    if (mode === "edit" && currentTask) {
      setFormData({
        title: currentTask.title || "",
        description: currentTask.description || "",
        project: currentTask.project || "",
        priority:
          priorities.find((p) => p.name === currentTask.priority)?.id || "",
        status: statuses.find((s) => s.name === currentTask.status)?.id || "",
        responsible: currentTask.assignee?.id || "",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        project: "",
        priority: priorities.find((p) => p.name === "Medium")?.id || "",
        status: statuses.find((s) => s.name === "ToDo")?.id || "",
        responsible: "",
      });
    }
  }, [currentTask, mode]);

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
          setFormData={setFormData}
          statuses={statuses}
          priorities={priorities}
          responsible={users}
        />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="primary">
          {mode === "edit" ? "Обновить" : "Создать"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
