import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export const MaterialDropDown = ({ dropdown = [], fn }) => {
  const handleChange = (ev) => fn(parseInt(ev.currentTarget.value));

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: "program",
            id: "uncontrolled-native",
          }}
          input={<BootstrapInput />}
          onChange={handleChange}
        >
          {dropdown.map((e, i) => {
            return (
              <option key={i} value={i}>
                {e}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};
