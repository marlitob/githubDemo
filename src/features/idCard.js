import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useSelector} from "react-redux";
import {Fade} from "@mui/material";


export default function IDCard({selectedUser}) {
    const {contributorDetails} = useSelector((state) => state.counter);

    const card = selectedUser? selectedUser.map(u =>
            <React.Fragment key={u.id}>
                <CardContent>
                    <Typography align={"justify"} variant={"subtitle2"}   color="text.secondary" >
                        Username: {u.login}
                    </Typography>
                    <Typography align={"justify"}  color="text.secondary">
                        Location: {contributorDetails.location === null ? "Location Not Available" : contributorDetails.location }
                    </Typography>
                    <Typography align={"justify"}  color="text.secondary">
                        Number of Contributions: {u.contributions}
                    </Typography>
                    <Typography align={"justify"}  color="text.secondary">
                        Followers: {contributorDetails.followers}
                    </Typography>
                    <Typography  align={"justify"}  color="text.secondary">
                        Following: {contributorDetails.following}
                    </Typography>
                    <Typography  color="text.secondary">
                        Bio:
                    </Typography>
                    <Typography style={{fontSize: "12px"}}   variant="caption">
                        {contributorDetails.bio === null ? "Bio Not Available" : contributorDetails.bio}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"> </Button>
                </CardActions>
            </React.Fragment>
       ): null

    return (
        <Box   sx={{ minWidth: 275 }}>
            <Fade in={!!contributorDetails.login} timeout={{ appear: 900, enter: 1800, exit: 1200 }}>
            <Card raised variant="none">{card}</Card>
            </Fade>
        </Box>
    );
}
