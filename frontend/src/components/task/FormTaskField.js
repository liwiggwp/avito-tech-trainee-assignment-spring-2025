import React from "react";
import { TextField, MenuItem } from "@mui/material";

export default function TaskFormFields({
  formData,
  handleChange,
  statuses,
  priorities,
  responsible,
}) {
  return (
    <>
      <TextField
        fullWidth
        margin="dense"
        label="Название"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="dense"
        label="Описание"
        name="description"
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={4}
      />
      <TextField
        select
        fullWidth
        margin="dense"
        label="Приоритет"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        required
      >
        {priorities.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        fullWidth
        margin="dense"
        label="Статус"
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
      >
        {statuses.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        fullWidth
        margin="dense"
        label="Исполнитель"
        name="responsible"
        value={formData.responsible}
        onChange={handleChange}
        required
      >
        {responsible.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.fullName}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}
