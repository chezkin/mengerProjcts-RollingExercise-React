import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';




import Project from '../types/ProjectType';

type Props = {
    Projects: Project[],
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    value: number 
}

const TabsMenu = (props: Props) => {

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        props.setValue(newValue);
    };

    return (
        <Box >
            <Tabs
               value={props.value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
            >
                {props.Projects.map((project, index) => {
                    return (<Tab
                        key={index}
                        label={project.name}
                        value={index}
                    />)
                })}
            </Tabs>
        </Box>
    );
}

export default TabsMenu