import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { api } from "../utils/api";

const Feed = () => {

    const [selectedCategory, setselectedCategory] = useState("New")

    useEffect(() => {
        api(`search?part=snippet&q=${selectedCategory}`)
    }, [selectedCategory])
    
    return(
        <Stack sx={{ flexDirection:{ sx:"column", md:"row"}}}>
            <Box 
            sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setselectedCategory={setselectedCategory}
                />
                <Typography 
                className="copyright" variant="body2" 
                sx={{ color:"#fff"}}
                >
                    Copyright &copy; <a href="https://accodes21.github.io/Profile/" target="blank" 
                    style={{color:"#fff"}}
                    >
                        Aarya Chopkar
                    </a>
                </Typography>
            </Box>
            <Box>
                <Videos videos={[]}/>
            </Box>
        </Stack>
    )
};

export default Feed