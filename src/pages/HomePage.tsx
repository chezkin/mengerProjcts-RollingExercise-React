import React from 'react'
import Project from '../types/ProjectType';
import TabsMenu from '../components/TabsMenu';
import Typography from '@mui/material/Typography';


type Props = {
    Projects: Project[],
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

const HomePage = (props: Props) => {
    const [value, setValue] = React.useState(-1);
  return (<>
    <TabsMenu Projects={props.Projects} setProjects={props.setProjects} setValue={setValue} value={value} />
                 {value >= 0  && <Typography>{props.Projects[value].name}</Typography>} 

                 
  </>

  )
}

export default HomePage