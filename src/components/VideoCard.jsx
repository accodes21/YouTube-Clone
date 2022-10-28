import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoVideoUrl, demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({video:{id :{videoId}, snippet }}) =>{
    // console.log(snippet);
    return(
        <Card sx={{width: {md:"350px", xs:"100%"}, borderRadius:0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                component="img"
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{height:190, width:360, objectFit:"cover"}}/>
            </Link>
            <CardContent sx={{backgroundColor : "#1e1e1e", height:"100px"}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" color="white" fontWeight="bold">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" color="gray" fontWeight="bold">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, ml:"5px"}}/>
                </Typography>
            </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard;