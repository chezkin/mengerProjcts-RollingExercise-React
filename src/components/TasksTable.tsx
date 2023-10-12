import React from 'react';

import { Button, Box, Typography } from '@mui/material';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper

} from '@mui/material';

import { Task } from '../types/ProjectType';
type Props = {
    tasks: Task[]
}

const TasksTable = (props: Props) => {

    return (
        <TableContainer component={Paper} sx={{ maxHeight: '45vh' }}>
            <Table aria-label='Simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Due Date</TableCell>
                        <TableCell align='center'>add</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    {props.tasks.map((task) => (
                        <TableRow key={task.name}>
                            <TableCell>{task.name}</TableCell>
                            <TableCell>{task.status}</TableCell>
                            <TableCell>{task.dueDate}</TableCell>
                            <TableCell align='center'><Button>edit</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TasksTable