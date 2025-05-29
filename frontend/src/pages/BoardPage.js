import React from "react";
import Header from "../components/header/Header";
import { Container } from "@mui/material";

export default function BoardPage() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <div>BoardPage</div>
      </Container>
    </>
  );
}
