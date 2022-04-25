import Card from "@mui/material/Card";
import {CardMedia} from "@mui/material";

const AvatarDisplay = ({avatarImage}) =>{
return  (avatarImage ? <Card sx={{ maxWidth: 270 }}>
    <CardMedia
        component="img"
        height="280"
        image={avatarImage === "Loading" ? "https://i.gifer.com/embedded/download/EXfa.gif": avatarImage}
        alt="ID Card"
    />
</Card> :  null)
}

 export default AvatarDisplay
