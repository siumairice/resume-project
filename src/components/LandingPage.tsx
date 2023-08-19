import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import SearchBar from "./SearchBar";

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

const arr: string []= [
'2','a','b','c'
];


const aa = [{title:"tagac", date: "a", points: ["a"], tags:["a","c"]}, {title:"tagab", date:"b", points:["a"], tags:["a","b"]}]


function LandingPage() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.light,
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar dataList={aa} tagList={arr}></SearchBar>
        <Box
          sx={{
            width: "40vw",
          }}
        >
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: "bold",
              color: theme.palette.primary.dark,
            }}
          >
            idk what our thing is called!
          </Typography>
          <Typography sx={{ marginBottom: 4 }}>
            this is a really long description about how much I love hack the 6ix
            and working and coding and doing code and cooking. sorry graphic
            design is not my passion
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
              borderRadius: 6,
              border: 0,
              outline: 0,
              padding: 3,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                outline: 0,
              },
            }}
          >
            Call to action button!
          </Button>
        </Box>
        <Box sx={{}}>
          <img src="src\assets\resume-icon.png" width="300"></img>
        </Box>
      </Box>
    </>
  );
}

export default LandingPage;
