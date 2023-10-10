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
import HomePage from './pages/HomePage';




export default function App() {
const [myProjects , setMyProjects] = React.useState<Project[]>([project1, project2, project3, project4]);


  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 3 }}>
        <Typography  variant='h1'>
          My projcts 
        </Typography>
        <HomePage Projects={myProjects} setProjects={setMyProjects} />


        <Copyright />
      </Box>
    </Container>
  );
}




function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
