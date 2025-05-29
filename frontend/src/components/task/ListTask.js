import React from "react";
import { Typography, Card, CardContent, Chip, Box } from "@mui/material";
import { priorityColor, statusColor } from "../../utils/ColorChip";

export default function ListTask({ tasks }) {
  if (tasks.length === 0) {
    return <Typography>Нет задач</Typography>;
  }

  return (
    <>
      {tasks.map((task) => (
        <Card variant="outlined" sx={{ mb: 2 }} key={task.id}>
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ flex: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {task.title}
                </Typography>
              </Box>
              <Box sx={{ flex: 2 }}>
                <Typography variant="body2">
                  {task.assignee?.fullName || task.responsible || "—"}
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
                <Chip
                  label={task.status}
                  size="small"
                  sx={{ width: "80%" }}
                  color={statusColor(task.status)}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
