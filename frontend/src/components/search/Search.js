import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function ({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearchChange(searchTerm);
    }
  };

  return (
     <Box
      sx={{
        position: "relative",
        backgroundColor: alpha("#161616", 0.15),
        borderRadius: 1,
        marginRight: 2,
        marginLeft: 0,
        width: "100%",
        "&:hover": {
          backgroundColor: alpha("#161616", 0.25),
        },
        minHeight: 40,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <SearchIcon />
      </Box>
      <InputBase
        fullWidth
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sx={{
          color: "inherit",
          width: "100%",
          "& .MuiInputBase-input": {
            padding: "8px 8px 8px 40px",
            width: "100%",
            boxSizing: "border-box",
          },
        }}
      />
    </Box>
  );
}
