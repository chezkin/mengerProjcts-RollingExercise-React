import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Project from './types/ProjectType';

import {
  project1,
  project2,
  project3,
  project4
} from './db/dbDefult'
import RouterTabs from './router/Router';

import { store } from './store';
import { Provider } from 'react-redux';



export default function App() {



  return (
    <Container sx={
      {
        height: '100vh', display: 'flex', flexDirection: 'column',
         justifyContent: 'space-between', paddingBottom: '3%',
      }
    }
      fixed maxWidth="lg">
      <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h3'>
          My projcts
        </Typography>
        <Provider store={store}>
          <RouterTabs />
        </Provider>
      </Box>
      <Copyright />
    </Container>
  );
}




function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:5173/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
