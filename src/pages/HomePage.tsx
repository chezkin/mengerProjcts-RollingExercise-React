import React from 'react'
import Project from '../types/ProjectType';
import TabsMenu from '../components/TabsMenu';
import Typography from '@mui/material/Typography';


import RouterTabs from '../router/RouterTabs';
import CardProject from '../components/CardProject';


type Props = {
    Projects: Project[],
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

const HomePage = (props: Props) => {
    const [value, setValue] = React.useState(-1);
    // {addTOrouter.push(props.Projects.map((project) => {
    //     {
    //         path: '/',
    //         element: <SelectProject />,
    //         errorElement: <ErrorPage />,
    //     }
    // }

    // ))
    // }


    return (<>
        <TabsMenu Projects={props.Projects} setProjects={props.setProjects} setValue={setValue} value={value} />
        {value >= 0 && <Typography>{props.Projects[value].name}</Typography>}
        <RouterTabs Projects={props.Projects}/>

    </>

    )
}

export default HomePage