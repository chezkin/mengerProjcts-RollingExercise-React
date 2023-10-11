import React from 'react'
import Project from '../types/ProjectType';
import TabsMenu from '../components/TabsMenu';
import Typography from '@mui/material/Typography';

import { Outlet } from "react-router-dom";



import CardProject from '../components/CardProject';


type Props = {
    Projects: Project[],
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

const HomePage = (props: Props) => {


    return (<>
       
        <TabsMenu Projects={props.Projects} setProjects={props.setProjects} />

        <Outlet/>
    </>

    )
}

export default HomePage