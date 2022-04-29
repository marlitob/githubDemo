import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import {useDispatch, useSelector} from "react-redux";
import {repoActions} from "../actions/repoActions"
import {getContributorDetailsActions} from "../actions/repoActions"
import ContributerTable from "../features/contributerTable";
import {useEffect, useState} from "react";
import IDCard from "../features/idCard";
import AvatarDisplay from "../features/avatarDisplay";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/facebook/react">
        GitHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `100%`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const mdTheme = createTheme();

function DashboardContent() {
  const {contributors} = useSelector((state) => state.counter);
  const [selectedUser, setSelectedUser] = useState(0);

  const dispatch = useDispatch();


    useEffect(() => {
             dispatch(repoActions())
    }, [dispatch]);

  const setSelectedUserObj =(id) =>{
   const userObj = contributors.filter(c => c.id === id)
      setSelectedUser(userObj)
      dispatch(getContributorDetailsActions(userObj[0].login))
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }} >
        <AppBar  >
          <Toolbar
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              The React Team
            </Typography>
            <IconButton color="inherit">
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid style={{display: selectedUser? "block" : "none" }} item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <AvatarDisplay avatarImage={selectedUser ?  selectedUser[0].avatar_url : null } />
                </Paper>
              </Grid>
              <Grid style={{display: selectedUser? "block" : "none" }} item xs={12} md={4}  lg={9}>
                <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                >
                  <IDCard selectedUser={selectedUser ? selectedUser :null}/>

                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper  sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <ContributerTable setSelectedUser={setSelectedUserObj}/>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
