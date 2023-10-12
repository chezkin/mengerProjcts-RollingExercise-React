import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';

import { setIndexProject } from '../utils/indexProjectSlice';


type Props = {

}
const TabsMenu = (props: Props) => {
    const projects = useSelector((state: RootState) => state.projects.Projects)
    const indexProject = useSelector((state: RootState) => state.indexProject.indexProject)
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        dispatch(setIndexProject(newValue));
        navigate(`${projects[newValue].name.replace(/ /g, '-')}/${newValue}`);
    };

    return (
        <Box >
            <Tabs
               value={indexProject}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
            >
                {projects.map((project, index) => {
                    return (
                        <Tab
                        key={index}
                        label={project.name}
                        value={index}
                        />
                          
                    )
                })}
            </Tabs>
            
        </Box>
    );
}

export default TabsMenu



