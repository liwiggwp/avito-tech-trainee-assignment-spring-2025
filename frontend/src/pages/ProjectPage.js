import React from "react";
import { Card, CardContent } from "@mui/material";
import ListBoard from "../components/board/ListBoard";
import ApiServices from "../services/ApiServices";
export default function ProjectPage() {
  const { boards } = ApiServices();
  return (
    <>
      <Card variant="outlined" sx={{ mt: 2, mb: 2 }}>
        <CardContent sx={{ p: 2 }}>
          <ListBoard boards={boards} />
        </CardContent>
      </Card>
    </>
  );
}
