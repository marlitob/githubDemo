import Card from "@mui/material/Card";
import {CardMedia, Fade} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

const AvatarDisplay = ({avatarImage}) =>{
return  (avatarImage ?
    <Fade in={!!avatarImage} timeout={{ appear:1300, enter: 1800, exit: 1200 }}>
        <div style={{display: "block"}}>
    <Card sx={{ maxWidth: 270 }}>
    <CardMedia
        component="img"
        height="244"
        image={avatarImage === "Loading" ? "https://i.gifer.com/embedded/download/EXfa.gif": avatarImage}
        alt="ID Card"
    />
    </Card> </div></Fade> :  null)
}

 export default AvatarDisplay
