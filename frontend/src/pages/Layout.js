import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "../components/header/Header";
import FormTask from "../components/task/FormTask";

export default function Layout(props) {
  const [formOpen, setFormOpen] = useState(false);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };
  
  return (
    <>
      <Header onFormOpen={handleFormOpen} />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {props.main}
      </Container>
      <FormTask open={formOpen} onClose={handleFormClose} />
    </>
  );
}
