import React from "react";
import Header from "../components/header/Header";
import { Container } from "@mui/material";

export default function TaskPage() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <div>TaskPage</div>
      </Container>
    </>
  );
}
