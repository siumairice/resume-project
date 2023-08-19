import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchResults from './SearchResults';

type List = {
    title: string;
    date: string;
    languages?: string[];
    points: string[];
    tags: string[];
};

type Props = {
    dataList: List[];
    tagList: string[];
};



function SearchBar({ dataList, tagList }: Props) {
    const [search, setSearch] = useState<string | null>("");

    const results = dataList.filter(component => {
        return component.tags.includes(search || "");
    });

    function searchList() {
        return (
            <SearchResults results={results}/>
        );
    }   
    return (
        <>
        <Autocomplete
            disablePortal
            options={tagList}
            sx={{ width: '6rem' }}
            onChange={(event, value) => setSearch(value)}
            renderInput={(params) => <TextField {...params} label="Tag Search" />}
        />
        <div>{searchList()}</div>
        </>
    );
}

export default SearchBar;
