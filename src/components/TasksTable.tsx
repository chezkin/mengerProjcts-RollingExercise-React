import React, { useState, useEffect } from 'react';

import { IconButton, Button, Box, Typography } from '@mui/material';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Collapse,
    
    Paper

} from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Task } from '../types/ProjectType';
type Props = {
    tasks: Task[]
}

const TasksTable = (props: Props) => {

    return (
        <TableContainer component={Paper} sx={{ width: '80vh', maxHeight: '55vh' }}>
            <Table aria-label='Simple table' stickyHeader>
            <colgroup>
            <col style={{width:'60%'}}/>
            <col style={{width:'15%'}}/>
            <col style={{width:'20%'}}/>
            <col style={{width:'5%'}}/>
          </colgroup>
                <TableHead>
                    <TableRow>
                        <TableCell> Name </TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Due Date</TableCell>
                        <TableCell align='center'>
                            <IconButton><AddTaskIcon /></IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {props.tasks.map((task) => (
                        <TasksRow key={task.name + task.status} task={task} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TasksTable



type PropsRow = {
    task: Task
}

const TasksRow = (props: PropsRow) => {
    const task = props.task;
    const [descriptionState, setDescriptionState] = useState<boolean>(false)
    const styleRow = { backgroundColor: '#F0F0F0', margin: '3px', border: '2px solid white' }


    const colorStatus = (status: string) => {
        switch (status) {
            //'Completed' | 'Pending' | 'In Progress' | 'Aborted'
            case 'Pending':
                return '#F0F0F0'
            case 'In Progress':
                return '#F7D060'
            case 'Completed':
                return '#98D8AA'
            case 'Aborted':
                return '#FF6D60'
        }
    }
    return (
        <React.Fragment>
            <TableRow key={task.name}>
                <TableCell sx={{ ...styleRow, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography> {task.name}</Typography>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setDescriptionState(!descriptionState)}
                    >  {!descriptionState ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton>
                    {/* <Box>rfgtbgtgbhhynhn</Box> */}
                </TableCell>
                <TableCell sx={
                    {
                        ...styleRow, backgroundColor: colorStatus(task.status)
                    }}>{task.status}</TableCell>
                <TableCell sx={styleRow}>{task.dueDate}</TableCell>
                <TableCell sx={styleRow} align='center'>
                    <IconButton><ModeEditOutlineOutlinedIcon /></IconButton>
                </TableCell>
            </TableRow>
            {descriptionState && (
                <TableRow >
                    <TableCell sx={{ padding: 0 }} colSpan={4}>
                        <Typography variant="h6" gutterBottom component="div">
                            Description
                        </Typography>
                        <ul>
                            {task.description.map(descriptionOBJ => (<li key={descriptionOBJ.description}>{descriptionOBJ.description}</li>))}
                        </ul>
                    </TableCell>
                </TableRow>)}
        </React.Fragment>
    )
}

