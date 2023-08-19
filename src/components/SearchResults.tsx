import {Box} from "@mui/material";
type List = {
    title: string;
    date: string;
    languages?: string[];
    points: string[];
    tags: string[];
};
type props ={
    results: List [];

}

const SearchResults = ({results}:props) => {
    const filteredResults = results.map(component => <h1>{component.title}</h1>)
  return (
    <Box>
        {filteredResults}
    </Box>
  )
}

export default SearchResults
