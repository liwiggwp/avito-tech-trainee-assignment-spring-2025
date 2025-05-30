import * as React from "react";
import {
  Button,
  Container,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openCreateForm } from "../../store/slices/formSlice";

export default function Header() {
  const dispatch = useDispatch();

  const handleOpenCreateTask = () => {
    dispatch(openCreateForm());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#161616" }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Link
                to="/issues"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant="h6">Все задачи</Typography>
              </Link>
              <Link
                to="/boards"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant="h6">Проекты</Typography>
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0095FF",
                  borderRadius: "10px",
                }}
                onClick={handleOpenCreateTask}
              >
                Создать задачу
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
