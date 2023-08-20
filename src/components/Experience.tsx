import * as React from "react";
import { Box, Button, Typography, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  title: string;
  location: string;
  description: string[];
  tags?: string[];
}

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
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.light,
    borderRadius: 8,
    padding: 15,
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
  },
  line: {
    height: 1.1,
    backgroundColor: theme.palette.primary.dark,
  },
  description: {
    color: theme.palette.primary.dark,
    textAlign: "left",
  },
});

const Experience = ({ title, location, description, tags = [] }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.heading}>
          <Typography
            sx={{
              color: theme.palette.primary.dark,
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "bold",
            }}
          >
            {location}
          </Typography>
        </Box>
        <Box className={classes.line}></Box>
        <Typography className={classes.description}>
          {description.map((line) => (
            <li>{line}</li>
          ))}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginTop: 1 }}>
          {tags.map((tag) => (
            <Button
              variant="contained"
              sx={{
                color: theme.palette.primary.light,
                backgroundColor: theme.palette.primary.dark,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              {tag}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Experience;
