import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
} from "@mui/material";
import { priorityColor } from "../../utils/ColorChip";
import { useDispatch } from "react-redux";
import { openEditForm } from "../../store/slices/formSlice";
import StatusChipMenu from "../StatusChipMenu";

export default function CardTaskBoard({ task }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <>
      <Card
        variant="outlined"
        onClick={() => dispatch(openEditForm({ ...task, boardId: id }))}
        key={task.id}
        sx={{ mb: 2, cursor: "pointer" }}
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData("taskId", task.id);
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", mt: 1 }}>
              {task.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StatusChipMenu task={task} />
              <Chip
                label={task.priority}
                size="small"
                sx={{ width: "50%" }}
                color={priorityColor(task.priority)}
              />
              <Avatar
                src={task.assignee.avatarUrl}
                sx={{ width: 24, height: 24 }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
