import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "../components/header/Header";
import FormTask from "../components/task/FormTask";


export default function Layout(props) {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {props.main}
      </Container>
      <FormTask />
    </>
  );
}
