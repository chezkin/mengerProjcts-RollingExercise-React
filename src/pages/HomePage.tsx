import React from 'react'
import Project from '../types/ProjectType';
import TabsMenu from '../components/TabsMenu';
import {Typography, Box, Button, IconButton} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { Outlet } from "react-router-dom";
import AddProjectBtn from '../components/AddProjectBtn';




type Props = {
    Projects: Project[],
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

const HomePage = (props: Props) => {
  


    return (<>
        <Box sx={{display: 'flex'}}>
        <TabsMenu Projects={props.Projects} setProjects={props.setProjects} />
        <AddProjectBtn Projects={props.Projects} setProjects={props.setProjects}/>
        </Box>

        <Outlet/>
    </>

    )
}

export default HomePage