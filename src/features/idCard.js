import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function IDCard({selectedUser}) {
    const card = selectedUser? selectedUser.map(u =>
            <React.Fragment key={u.id}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Username
                    </Typography>
                    <Typography variant="h5" component="div">
                        {u.login}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Number of Contributions
                    </Typography>
                    <Typography variant="body2">
                        {u.contributions}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"> </Button>
                </CardActions>
            </React.Fragment>
       ): null

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="none">{card}</Card>
        </Box>
    );
}
