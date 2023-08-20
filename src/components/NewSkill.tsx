import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F8E4F5",
      main: "#BE8AA1",
      dark: "#995375",
      contrastText: "#FFFFFF",
    },
  },
});

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    display: "flex",
    gap: 1,
    // bro im not even using this rn,,,
  },
});

const NewSkill = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
          gap: 1,
          margin: 1,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AddCircleIcon></AddCircleIcon>
        <Typography>New Skill</Typography>
      </Button>
      <Menu
        sx={{ color: theme.palette.primary.dark }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Skills</MenuItem>
        <MenuItem onClick={handleClose}>Experience</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
      </Menu>
    </>
  );
};

export default NewSkill;
