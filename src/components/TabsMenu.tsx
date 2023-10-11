import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';



import Project from '../types/ProjectType';

type Props = {
    Projects: Project[],
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    value: number 
}




const TabsMenu = (props: Props) => {
    const navigate = useNavigate();
    const handleTabClick = (projectName : string) => {
        navigate(`/${projectName.replace(/ /g, '-')}`)
        // chengeUrl(`${projectName.replace(/ /g, '-')}`)
    } 

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
                    return (
                        <>
                        <link href={`http://localhost:5173/${project.name.replace(/ /g, '-')}`}></link>
                        <Tab
                        key={index}
                        label={project.name}
                        value={index}
                        onClick={() => handleTabClick(project.name)}
                        />
                        </>
                        
                    )
                })}
            </Tabs>
            
        </Box>
    );
}

export default TabsMenu



function chengeUrl(newUrl:string) {
    const url = new URL(window.location.href);
    const currentPath = url.pathname;
    
    // הוסף את המחרוזת לנתיב הנוכחי ושנה את ה-URL
    url.pathname = `${currentPath}${newUrl}`;
    
    window.history.pushState({}, "", url);
}
