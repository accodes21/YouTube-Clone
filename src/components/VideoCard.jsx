import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoVideoUrl, demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({video :{id : videoId}, snippet}) =>{
    // console.log(video);
    return(
        <Card>
            <Link>
                <CardMedia image={snippet?.thumbnail?.high?.url}/>
            </Link>
        </Card>
    )
}

export default VideoCard;