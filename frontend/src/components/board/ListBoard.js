import React from "react";
import { Typography, Card, CardContent, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ListBoard({ boards }) {
  if (boards.length === 0) {
    return <Typography>Нет проектов</Typography>;
  }

  return (
    <>
      {boards.map((board) => (
        <Card variant="outlined" sx={{ mb: 2 }} key={board.id}>
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ flex: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {board.name}
                </Typography>
              </Box>
              <Box>
                <Link
                  to={`/board/${board.id}`}
                  state={{ projectTitle: board.name }}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#161616",
                      borderColor: "#161616",
                      "&:hover": {
                        borderColor: "#161616",
                        backgroundColor: "#161616",
                        color: "white",
                      },
                    }}
                  >
                    Перейти к доске
                  </Button>
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
