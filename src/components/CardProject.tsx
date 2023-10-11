import React from 'react';
import Project from '../types/ProjectType';

import {Box, Typography} from '@mui/material';
type Props = {
    project : Project
}

const CardProject = (props: Props) => {
    const project = props.project
  return (
    <Box>
        <Typography variant='h3'>
        {project.name}
        </Typography>

    </Box>
  )
}

export default CardProject