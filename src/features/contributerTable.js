import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector} from 'react-redux';
import Card from "@mui/material/Card";
import {CardMedia} from "@mui/material";


const  ContributorTable = ({setSelectedUser}) => {
    const {contributors} = useSelector((state) => state.counter);

    return (
        <React.Fragment>
            <Table style={{cursor: "pointer"}} size="small">
                <TableHead>
                    <TableRow >
                        <TableCell>Avatar</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Number of Contributions</TableCell>
                        <TableCell>Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contributors.map((c) => (
                        <TableRow hover onClick={() => setSelectedUser(c.id)} key={c.id}>
                            <TableCell>
                                <Card sx={{ maxWidth: 50 }}>
                                    <CardMedia
                                        component="img"
                                        height="40"
                                        image={c.avatar_url !== "Loading" ? c.avatar_url : "https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw800"}
                                        alt="User Img"
                                    />
                                </Card>
                            </TableCell>
                            <TableCell>{c.login}</TableCell>
                            <TableCell>{c.contributions}</TableCell>
                            <TableCell>{c.type}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default  ContributorTable
