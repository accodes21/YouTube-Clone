import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {
    return(
        <Paper 
        component="form"
        onSubmit={() => {}}
        sx={{
            borderRadius:20,
            border:"2px solid #e3e3e3",
            pl:3,

        }} 
        >
            <input type="text" 
            className="search-bar" 
            placeholder="Search.."
            value=""
            onChange={() => {}}            
            />
            <IconButton type="submit" sx={{color:"red", }}>
                <Search/>
            </IconButton>

        </Paper>
    )
};

export default SearchBar