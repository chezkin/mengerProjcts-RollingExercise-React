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
}




const TabsMenu = (props: Props) => {
    const [value, setValue] = React.useState<number | null>(null);

    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        navigate(`/${props.Projects[newValue].name.replace(/ /g, '-')}`);
    };

    return (
        <Box >
            <Tabs
               value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
            >
                {props.Projects.map((project, index) => {
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



function chengeUrl(newUrl:string) {
    const url = new URL(window.location.href);
    const currentPath = url.pathname;
    
    // הוסף את המחרוזת לנתיב הנוכחי ושנה את ה-URL
    url.pathname = `${currentPath}${newUrl}`;
    
    window.history.pushState({}, "", url);
}
