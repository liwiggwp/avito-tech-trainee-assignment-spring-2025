import React from "react";
import Header from "../components/header/Header";
import { Container } from "@mui/material";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {props.main}
      </Container>
    </>
  );
}
