import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoVideoUrl, demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({video:{id :{videoId}, snippet }}) =>{
    // console.log(snippet);
    return(
        <Card>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                component="img"
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{height:180, width:358, objectFit:"cover"}}/>
            </Link>
        </Card>
    )
}

export default VideoCard;