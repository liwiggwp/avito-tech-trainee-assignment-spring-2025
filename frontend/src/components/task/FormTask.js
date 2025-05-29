import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import FormTaskField from "./FormTaskField";

const statuses = [
  { id: 1, name: "К выполнению" },
  { id: 2, name: "Выполняется" },
  { id: 3, name: "Выполнено" },
];
const priorities = [
  { id: 1, name: "Низкий" },
  { id: 2, name: "Средний" },
  { id: 3, name: "Высокий" },
];
const responsible = [
  { id: 1, fullName: "Александра Ветрова" },
  { id: 2, fullName: "Илья Романов" },
];

export default function FormTask({ open, onClose, initialData }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    project: "",
    priority: priorities.find((p) => p.name === "Средний")?.id || "",
    status: statuses.find((s) => s.name === "К выполнению")?.id || "",
    responsible: "",
  });

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>
          {initialData ? "Редактировать задачу" : "Создать задачу"}
        </DialogTitle>
        <DialogContent>
          <FormTaskField
            formData={formData}
            statuses={statuses}
            priorities={priorities}
            responsible={responsible}
          />
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button variant="contained" color="primary">
            {initialData ? "Обновить" : "Создать"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
