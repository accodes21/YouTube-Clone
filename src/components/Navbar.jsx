import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} 
    sx={{position:"sticky", backgroundColor:"#000", top:0, justifyContent:"space-between", borderBottom:"1px solid #3d3d3d", zIndex:"2"}}>
        <Link to="/" style={{display:"flex", alignItems:"center"}}>
            <img src={logo} alt="logo" height={45} />
            <Typography variant={{xs:'subtitle', md:"h5"}} color="#fff" fontFamily="consolas" fontWeight="bold" marginLeft="5px">
                Youtube
            </Typography>
        </Link>
        <SearchBar/>
    </Stack>
);

export default Navbar