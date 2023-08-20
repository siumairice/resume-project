import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PrimaryAppSearchBar from "./PrimaryAppSearchBar";
import SearchBar from "./SearchBar";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    width: "100vw",
    backgroundColor: "#B66981",
    zIndex: "9000",
  },
  sideNav: {
    display: "flex",
    minHeight: "100vh",
    width: "30vw",
    backgroundColor: "#E897B0",
    flexDirection: "column",
  },
  resume: {
    backgroundColor: "#E9EAEA",
    margin: "auto",
    marginTop: "10vh",
    width: "40vw",
    height: "88vh",
  },
});


const arr: string []= [
  '2','a','b','c'
  ];
  
  
  const aa = [{title:"tagac", date: "a", points: ["a"], tags:["a","c"]}, {title:"tagab", date:"b", points:["a"], tags:["a","b"]}]
  
  

function ResumeTemplate() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <PrimaryAppSearchBar />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box className={classes.sideNav}>
        <SearchBar dataList={aa} tagList={arr}></SearchBar>
        </Box>
        <Box className={classes.resume}></Box>
      </Box>
    </>
  );
}

export default ResumeTemplate;
