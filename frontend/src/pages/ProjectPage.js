import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import ListBoard from "../components/board/ListBoard";
import ApiServices from "../services/ApiServices";

export default function ProjectPage() {
  const { getBoards } = ApiServices();
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      setBoards(await getBoards());
    };

    fetchBoards();
  }, []);

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
