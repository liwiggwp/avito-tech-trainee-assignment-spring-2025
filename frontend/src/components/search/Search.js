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
      }}
    >
      <Box
        sx={{
          padding: "0 16px",
          height: "100%",
          position: "absolute",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchIcon />
      </Box>
      <InputBase
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sx={{
          color: "inherit",
          "& .MuiInputBase-input": {
            padding: 1,
            paddingLeft: 6,
            width: "100%",
          },
        }}
      />
    </Box>
  );
}
