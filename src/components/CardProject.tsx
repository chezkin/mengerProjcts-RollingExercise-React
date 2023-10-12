import React from 'react';
import Project from '../types/ProjectType';

import { useParams } from 'react-router-dom'

import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';


import { Button, Box, Typography } from '@mui/material';
import TasksTable from './TasksTable';

type Props = {
}

const CardProject = (props: Props) => {

  const projects = useSelector((state: RootState) => state.projects.Projects)
  const params = useParams();
  let projectIndex = 0
  if (params.name && !params.id){
    const projectNameUnderScore : string = params.name
    const projectName : string = projectNameUnderScore.split('-').join(' ')
    projectIndex = projects.findIndex((p)=>p.name === projectName);
  }
  if (params.name && params.id){
    projectIndex = Number(params.id)
  }
  
  return (
    <Box>
      <Typography variant='h3'>
       
        {projects[projectIndex].name}
      
      </Typography>
      <Box>
        <TasksTable tasks={projects[projectIndex].tasks} />
      </Box>
    </Box>
  )
}

export default CardProject