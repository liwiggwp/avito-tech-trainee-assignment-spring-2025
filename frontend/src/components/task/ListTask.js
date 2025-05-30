import React from "react";
import { Typography, Card, CardContent, Chip, Box } from "@mui/material";
import { priorityColor } from "../../utils/ColorChip";
import { useDispatch } from "react-redux";
import { openEditForm } from "../../store/slices/formSlice";
import StatusChipMenu from "../StatusChipMenu";

export default function ListTask({ tasks }) {
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return <Typography>Нет задач</Typography>;
  }

  return (
    <>
      {tasks.map((task) => (
        <Card
          variant="outlined"
          onClick={() => dispatch(openEditForm(task))}
          sx={{ mb: 2, cursor: "pointer" }}
          key={task.id}
        >
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ flex: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {task.title}
                </Typography>
              </Box>
              <Box sx={{ flex: 2 }}>
                <Typography variant="body2">
                  {task.assignee.fullName}
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Chip
                  label={task.priority}
                  size="small"
                  sx={{ width: "80%" }}
                  color={priorityColor(task.priority)}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <StatusChipMenu task={task} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
