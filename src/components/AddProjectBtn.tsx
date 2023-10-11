import React, { useRef } from 'react';
import {Typography, Box, Button, IconButton, Modal, TextField} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Project from '../types/ProjectType';

type Props = {
    Projects: Project[],
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
  };

const AddProjectBtn = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const newProject = {
        name: '',
        tasks: []
    }
    let inputNewProjectName = useRef('');
    const handlClickCreatProject = () => {
        newProject.name = inputNewProjectName.current
        const projects = [...props.Projects , newProject]
        props.setProjects(projects);
        handleClose()
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <IconButton onClick={handleOpen} sx={{
            '&.MuiButtonBase-root':{
                color: 'gray',
                width: '50px',
                height: '50px',

            },
            '&.MuiButtonBase-root:hover':{
                backgroundColor: '#1976d2',
                borderRadius: '50%'
            }
        }}><AddCircleOutlineOutlinedIcon/></IconButton>
         <Modal
        open={open}
        onClose={handleClose}

      >
        <Box id="modal-modal" sx={style}>
          <Typography  variant="h6" >
          Create New Project
          </Typography>
          <TextField onChange={(e) => inputNewProjectName.current =  e.target.value} 
          label='Project Name' variant='standard'  name='name' 
          sx={{ mt: 2, width: '100%' }}/>
          
          <Box sx={{display:'flex', justifyContent:'end', marginTop: '7px'}}>
            <Button onClick={handlClickCreatProject} >create</Button>
            <Button onClick={handleClose}>cancel</Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default AddProjectBtn