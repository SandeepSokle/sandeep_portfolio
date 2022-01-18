import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export const AdminBlog = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        "& > *": {},
      }}
    >
      <Grid  sx={{ p: "2px 2rem" }}>
        <h1>AdminBlog</h1>
      </Grid>
    </Grid>
  );
};
