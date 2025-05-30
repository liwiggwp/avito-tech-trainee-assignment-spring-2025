import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";
import CardTaskBoard from "./CardTaskBoard";

export default function ColumnBoard({ nameColumn, taskBoard }) {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          minWidth: 270,
          minHeight: 500,
          p: 2,
          m: 1,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {nameColumn}
        </Typography>
        <Divider />
        <Box sx={{ mb: 2, mt: 2 }}>
          {taskBoard.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2">Нет задач</Typography>
            </Box>
          ) : (
            taskBoard.map((task) => <CardTaskBoard task={task} />)
          )}
        </Box>
      </Paper>
    </>
  );
}
